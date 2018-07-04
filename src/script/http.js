import axios from 'axios';
const http = axios.create({
    baseURL:"http://jsonplaceholder.typicode.com",
    // timeout:1000
})
export default http;