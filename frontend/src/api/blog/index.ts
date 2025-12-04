import api from "../../lib/api";

export const getBlogs = async () => {
    try {
        // Using fetch for server-side revalidation support if needed, but user asked for axios.
        // To support revalidation with axios, we might need a workaround or just use fetch for GET.
        // However, adhering to "use axios".
        const response = await api.get("/blogs?populate[Image]=true&populate[author][populate][Image]=true");
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};


export const getBlogBySlug = async (slug: string) => {
    try {
        // console.log(slug);
        const response = await api.get(`/blogs?filters[Slug][$eq]=${slug}&populate[Image]=true&populate[author][populate][Image]=true`);
        // console.log(response)
        return response.data;
    } catch (error) {
        console.error(`Error fetching blog with slug ${slug}:`, error);
        throw error;
    }
};

