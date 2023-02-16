import axios from "axios";

import Cookies from "universal-cookie";

const cookies = new Cookies();

axios.interceptors.request.use(
    function(config) {
        const token = cookies.get("at_cin");
        config.headers.authorization = `Bearer ${token}`;

        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);
