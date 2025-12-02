import { BlogBottom } from "./BlogBottom"
import { BlogTop } from "./BlogTop"

export const BlogPage = ({ slug }: { slug: string }) => {
    return (
        <div>
            <BlogTop slug={slug} />
            <BlogBottom slug={slug}/>
        </div>
    )
}