import axios from 'axios';

const API_URL = 'https://react-express-mongodb-vgbd.vercel.app/api/users';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
