import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error);
});

let AuthService = axios;
export default AuthService;