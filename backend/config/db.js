const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar las variables de entorno
dotenv.config();

// Función para conectar a MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error.message}`);
    process.exit(1); // Termina el proceso en caso de error
  }
};

module.exports = connectDB;
