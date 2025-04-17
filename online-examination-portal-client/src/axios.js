import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5008/api/v1'

axios.interceptors.request.use(function (req) {
    const user = localStorage.getItem('userData');

    if (user) {
        const { token } = JSON.parse(localStorage.getItem('userData'));
        req.headers.authorization = `Bearer ${token}`;
        return req;
    }
    return req;
});