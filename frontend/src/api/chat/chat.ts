import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

export const sendMessage = async (message: string) => {
    try {
        const response = await axios.post(`${API_URL}/chat`, {
            message,
        });
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
    }
};
