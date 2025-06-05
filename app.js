// ****************** LOAD ENVIRONMENT VARIABLES ******************
// Menggunakan package 'dotenv' untuk memuat variabel lingkungan (.env file)
// agar konfigurasi seperti PORT dan MongoDB URI dapat digunakan secara aman.
require('dotenv').config(); 

// Mengambil nilai MONGODB_URI dari environment variable setelah dotenv dimuat
const MONGODB_URI = process.env.MONGODB_URI;

// ****************** IMPORT MODULE ******************
// Mengimpor Express sebagai framework web server
const express = require('express');

// Mengimpor fungsi koneksi MongoDB dari file konfigurasi database
const connectDB = require('./config/database');

// Membuat instance aplikasi Express
const app = express();

// ****************** SETUP PORT ******************
// Mengambil nilai PORT dari environment variable, atau gunakan 3000 sebagai default
const PORT = process.env.PORT || 3000;

// ****************** CONNECT TO MONGODB ******************
// Memanggil fungsi connectDB untuk menghubungkan aplikasi ke database MongoDB
// Pastikan connectDB menggunakan MONGODB_URI yang sudah didefinisikan
connectDB(MONGODB_URI);

// ****************** MIDDLEWARE ******************
// Mengaktifkan middleware bawaan Express untuk parsing JSON pada request body
app.use(express.json());

// ****************** ROUTE EXAMPLE ******************
// Membuat route GET pada root ('/') yang mengirimkan response sederhana
app.get('/', (req, res) => {
  res.send('Hello from Express + Mongoose!');
});

// ****************** START SERVER ******************
// Menjalankan server pada port yang telah ditentukan dan menampilkan pesan ke console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
