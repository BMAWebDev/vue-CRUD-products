import axios from 'axios';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const success = (res) => {
  return res.data;
};

const error = (err) => {
  return err.response.data;
};

Axios.interceptors.response.use(success, error);

export default Axios;
