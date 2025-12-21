import { TravelInspiration } from "@/components/travelinspiration/TravelInspiration";
import { getBlogs } from "@/api/blog";

export const revalidate = 60;

export default async function Blogs() {
    let blogs = [];
    try {
        const res = await getBlogs();
        blogs = res?.data || [];
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
    }

    return (
        <div>
            <TravelInspiration blogs={blogs} />
        </div>
    )
}