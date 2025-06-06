// *************** IMPORT CORE ***************
const { gql } = require('apollo-server-express');

/**
 * GraphQL Schema Definitions using gql template literal.
 *
 * Scalars:
 * @scalar Date - Custom scalar type to represent date values.
 *
 * Types:
 * @type User
 * @property {ID!} id - Unique identifier for the user.
 * @property {String!} firstName - First name of the user.
 * @property {String!} lastName - Last name of the user.
 * @property {String!} email - Email address of the user.
 * @property {String!} role - Role assigned to the user (e.g., admin, teacher).
 * @property {Date} deletedAt - Timestamp for soft delete (null if not deleted).
 *
 * @type Student
 * @property {ID!} id - Unique identifier for the student.
 * @property {String!} firstName - First name of the student.
 * @property {String!} lastName - Last name of the student.
 * @property {String!} email - Email address of the student.
 * @property {Date} dateOfBirth - Birth date of the student.
 * @property {School} school - Associated school object.
 * @property {ID!} schoolId - ID of the associated school.
 * @property {Date} deletedAt - Timestamp for soft delete (null if not deleted).
 *
 * @type School
 * @property {ID!} id - Unique identifier for the school.
 * @property {String!} name - Name of the school.
 * @property {String} address - Address of the school (optional).
 * @property {[Student]} students - List of students attending the school.
 *
 * Queries:
 * @query users - Retrieve all users.
 * @query user(id: ID!) - Retrieve a user by ID.
 * @query students - Retrieve all students.
 * @query student(id: ID!) - Retrieve a student by ID.
 * @query schools - Retrieve all schools.
 * @query school(id: ID!) - Retrieve a school by ID.
 *
 * Mutations:
 * @mutation createUser - Create a new user.
 *   @param {String!} firstName - First name of the user.
 *   @param {String!} lastName - Last name of the user.
 *   @param {String!} email - Email address of the user.
 *   @param {String!} role - Role of the user.
 *   @returns {User}
 *
 * @mutation updateUser - Update an existing user by ID.
 *   @param {ID!} id - ID of the user to update.
 *   @param {String} firstName - New first name (optional).
 *   @param {String} lastName - New last name (optional).
 *   @param {String} email - New email (optional).
 *   @param {String} role - New role (optional).
 *   @returns {User}
 *
 * @mutation deleteUser - Soft delete a user by ID.
 *   @param {ID!} id - ID of the user to delete.
 *   @returns {User}
 *
 * @mutation createStudent - Create a new student.
 *   @param {String!} firstName - First name of the student.
 *   @param {String!} lastName - Last name of the student.
 *   @param {String!} email - Email address of the student.
 *   @param {Date} dateOfBirth - Date of birth of the student.
 *   @param {ID!} schoolId - ID of the school the student belongs to.
 *   @returns {Student}
 *
 * @mutation updateStudent - Update an existing student by ID.
 *   @param {ID!} id - ID of the student to update.
 *   @param {String} firstName - New first name (optional).
 *   @param {String} lastName - New last name (optional).
 *   @param {String} email - New email (optional).
 *   @param {Date} dateOfBirth - New date of birth (optional).
 *   @param {ID} schoolId - New school ID (optional).
 *   @returns {Student}
 *
 * @mutation deleteStudent - Soft delete a student by ID.
 *   @param {ID!} id - ID of the student to delete.
 *   @returns {Student}
 *
 * @mutation createSchool - Create a new school.
 *   @param {String!} name - Name of the school.
 *   @param {String} address - Address of the school (optional).
 *   @returns {School}
 *
 * @mutation updateSchool - Update an existing school by ID.
 *   @param {ID!} id - ID of the school to update.
 *   @param {String} name - New name (optional).
 *   @param {String} address - New address (optional).
 *   @returns {School}
 *
 * @mutation deleteSchool - Delete a school by ID.
 *   @param {ID!} id - ID of the school to delete.
 *   @returns {School}
 */
const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String!
    deletedAt: Date
  }

  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    dateOfBirth: Date
    school: School
    schoolId: ID!
    deletedAt: Date
  }

  type School {
    id: ID!
    name: String!
    address: String
    students: [Student]
  }

  type Query {
    users: [User]
    user(id: ID!): User

    students: [Student]
    student(id: ID!): Student

    schools: [School]
    school(id: ID!): School
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, role: String!): User
    updateUser(id: ID!, firstName: String, lastName: String, email: String, role: String): User
    deleteUser(id: ID!): User

    createStudent(firstName: String!, lastName: String!, email: String!, dateOfBirth: Date, schoolId: ID!): Student
    updateStudent(id: ID!, firstName: String, lastName: String, email: String, dateOfBirth: Date, schoolId: ID): Student
    deleteStudent(id: ID!): Student

    createSchool(name: String!, address: String): School
    updateSchool(id: ID!, name: String, address: String): School
    deleteSchool(id: ID!): School
  }
`;

// *************** EXPORT MODULE ***************
module.exports = typeDefs;