import axios from 'axios';

const API_URL = 'https://react-express-mongodb-vgbd.vercel.app/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
