import axios from 'axios';

export default axios.create({
  baseURL: 'http://10.2.1.49:5037/api/'
});
