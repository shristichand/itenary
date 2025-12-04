import api from "../../lib/api";

export const getGallery = async () => {
    try {
        const response = await api.get("/galleries?populate=*");
        return response.data;
    } catch (error) {
        console.error("Error fetching gallery:", error);
        throw error;
    }
};

export const getGalleryByCountry = async (country: string) => {
    try {
        const response = await api.get(`/galleries?filters[country][$eq]=${country}&populate=*`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching gallery for country ${country}:`, error);
        throw error;
    }
};
