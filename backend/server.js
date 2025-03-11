const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

// Cargar las variables de entorno
dotenv.config();

// Crear la instancia de Express
const app = express();

// Conectar a MongoDB
connectDB();

// Habilitar CORS
// const allowedOrigins = [
//   'https://react-express-mongodb-nu.vercel.app', 
//   'http://localhost:5173', // Si estás trabajando localmente con el frontend
// ];

app.use(cors({
  origin: '*', // Permite solicitudes solo desde el frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Cabeceras permitidas
}));

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);

// Configurar el puerto y escuchar las solicitudes
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
