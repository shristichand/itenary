import { BlogBottom } from "./BlogBottom"
import { BlogTop } from "./BlogTop"

export const BlogPage = ({ blog }: { blog: any }) => {
    if (!blog) return <div>Blog not found</div>;

    return (
        <div>
            <BlogTop blog={blog} />
            <BlogBottom blog={blog} />
        </div>
    )
}