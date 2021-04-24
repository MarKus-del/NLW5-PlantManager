import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/MarKus-del/NLW5-PlantManager'
});

export default api;