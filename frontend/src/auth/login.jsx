import React, { useState } from 'react';
import axiosInstance from '../api'; 
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
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
      const response = await axiosInstance.post('https://react-express-mongodb-vgbd.vercel.app/api/users/login', formData); 
      localStorage.setItem('loggedInUser', JSON.stringify(response.data)); 
      navigate('/users'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h1>
        
        {error && (
          <p className="text-red-500 text-center mb-4 transition-opacity opacity-100 animate-fadeOut">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
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
            Iniciar sesión
          </button>
        </form>

        <p className="mt-4 text-center">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
