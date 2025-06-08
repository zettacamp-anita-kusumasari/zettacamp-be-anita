// *************** IMPORT CORE ***************
const User = require('../models/User');
const Student = require('../models/Student');
const School = require('../models/School');

const resolvers = {
  Query: {
    // *************** User Queries (Soft Delete Aware) to fetch all users
    users: async () => await User.find({ deletedAt: null }),

    // *************** User Queries (Soft Delete Aware) to fetch a single user by ID
    user: async (_, { id }) => await User.findOne({ _id: id, deletedAt: null }),

    // *************** Student Queries to fetch all students
    students: async () => await Student.find({}),

    // *************** Student Queries to fetch a single student by ID
    student: async (_, { id }) => await Student.findById(id),

    // *************** School Queries to fetch all schools
    schools: async () => await School.find({}),

    // *************** School Queries to fetch a single school by ID
    school: async (_, { id }) => await School.findById(id),
  },

  Mutation: {
    // *************** Create a new user with provided args (arguments/parameters)
    createUser: async (_, args) => {
      const user = new User(args);
      return await user.save();
    },

    // *************** Update user by ID, returning the updated document
    updateUser: async (_, { id, ...updates }) => {
      const user = await User.findOne({ _id: id, deletedAt: null });
      if (!user) throw new Error('User not found or has been deleted');
      Object.assign(user, updates);
      return await user.save();
    },

    // *************** Soft delete a user by setting deletedAt to current date
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
    },

    // *************** Create a new student with provided args (arguments/parameters)
    createStudent: async (_, args) => {
      const student = new Student(args);
      return await student.save();
    },

    // *************** Update student by ID, returning the updated document
    updateStudent: async (_, { id, ...updates }) => {
      return await Student.findByIdAndUpdate(id, updates, { new: true });
    },

    // *************** Soft delete a student by setting deletedAt to current date
    deleteStudent: async (_, { id }) => {
      return await Student.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
    },

    // *************** Create a new school with provided args (arguments/parameters)
    createSchool: async (_, args) => {
      const school = new School(args);
      return await school.save();
    },

    // *************** Update school by ID, returning the updated document
    updateSchool: async (_, { id, ...updates }) => {
      return await School.findByIdAndUpdate(id, updates, { new: true });
    },

    // *************** Soft delete a school by setting deletedAt to current date
    deleteSchool: async (_, { id }) => {
      return await School.findByIdAndUpdate(id, { deletedAt: new Date() }, { new: true });
    },
  },

  Student: {
    // *************** Resolve the school field for a student by finding school with student.schoolId
    school: async (student) => {
      return await School.findById(student.schoolId);
    },
  },

  School: {
    // *************** Resolve the students field for a school by finding all students with schoolId matching school.id
    students: async (school) => {
      return await Student.find({ schoolId: school.id });
    },
  },
};

// *************** EXPORT MODULE ***************
module.exports = resolvers;