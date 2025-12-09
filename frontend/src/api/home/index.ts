import api from "../../lib/api";

export const getHeroData = async () => {
    try {
        const response = await api.get("/herosection?populate=*");
        console.log(response.data, "Hero")
        return response.data;
    } catch (error) {
        console.error("Error fetching hero data:", error);
        return null;
    }
};

export const getContactInfo = async () => {
    try {
        const response = await api.get("/Contact-infos?populate=*");
        return response.data;
    } catch (error) {
        console.error("Error fetching contact info:", error);
        return null;
    }
};

export const getSocialLinks = async () => {
    try {
        const response = await api.get("/socials?populate=*");
        return response.data;
    } catch (error) {
        console.error("Error fetching social links:", error);
        return null;
    }
};

export const getTeamData = async () => {
    try {
        const response = await api.get("/teams?populate=* ");
        return response.data;
    } catch (error) {
        console.error("Error fetching team data:", error);
        return null;
    }
};

export const getStatData = async () => {
    try {
        const response = await api.get("/stats?populate=* ");
        return response.data;
    } catch (error) {
        console.error("Error fetching stats:", error);
        return null;
    }
};
