import { getBlogBySlug } from "@/api/blog";
import { BlogPage } from "@/components/blog/BlogPage";

type PageProp = Promise<{ slug: string }>;

export const runtime = 'edge';
export const revalidate = 60;

export default async function Blog({ params }: { params: PageProp }) {
  const { slug } = await params;
  let blog = null;

  try {
    const res = await getBlogBySlug(slug);
    // Assuming API returns { data: [ { attributes: ... } ] } for filtering by slug, or { data: { attributes: ... } } if findOne.
    // getBlogBySlug uses `filters[slug][$eq]=${slug}`, so it returns an array in `data`.
    // I need to take the first item.
    blog = res?.data?.[0] || null;
    // console.log(blog);
  } catch (error) {
    console.error(`Failed to fetch blog with slug ${slug}:`, error);
  }

  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  );
}
