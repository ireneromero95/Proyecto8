require('dotenv').config();
const express = require('express');
const { connectDB } = require('./src/config/db');
const cors = require('cors');
const mainRouter = require('./src/api/routes/main');
const cloudinary = require('cloudinary').v2;
const app = express();
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.use(cors());
app.use(express.json());

//Esto para no tener tantas rutas aquí
app.use('/api/v1/', mainRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('El servidor está funcionando en: http://localhost:3000');
});
