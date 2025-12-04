import axios from "axios";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

const api = axios.create({
    baseURL: STRAPI_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
