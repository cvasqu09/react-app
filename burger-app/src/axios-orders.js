import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerapp-d0f0c.firebaseio.com/'
});

export default instance;
