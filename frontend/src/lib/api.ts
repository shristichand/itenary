import axios from "axios";

const api = axios.create({
    baseURL: "/api", // Replace with actual API URL if different
});

export const submitInquiry = async (data: any) => {
    const response = await api.post("/inquiry", data);
    return response.data;
};

export const submitContact = async (data: any) => {
    const response = await api.post("/contact", data);
    return response.data;
};

export const submitReview = async (data: any) => {
    const response = await api.post("/review", data);
    return response.data;
};

export default api;
