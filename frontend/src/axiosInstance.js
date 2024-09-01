import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstanceUser = axios.create({
  baseURL: 'http://localhost:5000/api/user',
});

const axiosInstancePosts = axios.create({
  baseURL: 'http://localhost:5000/api/posts',
});

axiosInstanceUser.interceptors.request.use(
  (config) => {
    const token = Cookies.get('authToken'); // Use Cookies.get to retrieve token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstancePosts.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Uncomment the following line if you want to export these instances
export { axiosInstanceUser, axiosInstancePosts };
