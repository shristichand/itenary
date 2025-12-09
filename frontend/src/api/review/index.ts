import api from "../../lib/api";

export const sendReview = async (data: any) => {
    try {
        const response = await api.post("/reviews", { data });
        return response.data;
    } catch (error) {
        console.error("Error sending review:", error);
        
    }
};

export const getReviews = async () => {
    try {
        const response = await api.get("/reviews");
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        
    }
};

export const getReviewByPackageId = async (id: string) => {
    try {
        const response = await api.get(`/reviews?filters[package][id][$eq]=${id}&populate=*`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch review with id ${id}:`, error);
        
    }
};

    
