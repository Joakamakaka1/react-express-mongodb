const mongoose = require('mongoose');

// Esquema de Usuario
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Para registrar las fechas de creación y actualización
  }
);

// Crear el modelo basado en el esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
