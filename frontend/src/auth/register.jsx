import React, { useState } from 'react';
import axiosInstance from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('https://react-express-mongodb-vgbd.vercel.app/', formData);
      console.log('Usuario registrado:', response.data);
      navigate('/');
    } catch (err) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Registrar</h1>
        
        {error && (
          <p className="text-red-500 text-center mb-4 transition-opacity opacity-100 animate-fadeOut">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-600">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all shadow-sm hover:shadow-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all shadow-sm hover:shadow-lg"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all shadow-sm hover:shadow-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-xl focus:ring-4 focus:ring-blue-300 transition-all"
          >
            Registrar
          </button>
        </form>

        <p className="mt-4 text-center">
          ¿Ya tienes cuenta?{' '}
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
