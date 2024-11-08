import axios from "axios";

const api = axios.create({
  baseURL: 'http://animeapi.us-east-1.elasticbeanstalk.com/'
});

export default api;