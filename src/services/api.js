import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.animeslink.com.br'
});

export default api;