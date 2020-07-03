import Axios from 'axios';
import Vue from 'vue';

const axios = Axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3005/' : 'www.domain.com',
    headers: {'X-Custom-Header': 'foobar'}
})


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.token = "My token" //getCookie("token")
    console.log(config)

    return config;
}, function (error) {
    // Do something with request error
    console.error("error from interceptor", error)
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);

    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;
