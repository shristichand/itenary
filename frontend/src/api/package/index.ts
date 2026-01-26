import api from "../../lib/api";

export const getPackages = async () => {
    try {
        const response = await api.get("/packages?populate=*");
        return response.data;
    } catch (error) {
        console.error("Error fetching packages:", error);
       return [];
    }
};

export const getPackagesByCountry = async (country: string) => {
    try {
        const response = await api.get(`/packages?filters[country][name][$eq]=${country}&populate=*`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching packages for country ${country}:`, error);
        return [];
    }
};

export const getPackageBySlug = async (slug: string) => {
    try {
        const response = await api.get(`/packages?filters[Slug][$eq]=${slug}&populate[country]=true&populate[Places]=true&populate[Itenary][populate]=ListItem&populate[Image]=true`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching package with slug ${slug}:`, error);
        return [];
    }
};
