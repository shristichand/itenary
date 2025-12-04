import api from "../../lib/api";

export const sendInquiry = async (data: any) => {
    try {
        const response = await api.post("/inquiries", { data });
        return response.data;
    } catch (error) {
        console.error("Error sending inquiry:", error);
        throw error;
    }
};

export const sendContactMessage = async (data: any) => {
    try {
        const response = await api.post("/contacts", { data });
        return response.data;
    } catch (error) {
        console.error("Error sending contact message:", error);
        throw error;
    }
};
