import { BlogPage } from "@/components/blog/BlogPage";
import { Metadata } from "next";

type PageProp = Promise<{ slug: string }>;

export default async function Blog({ params }: { params: PageProp }) {
  const { slug } = await params;

  return (
    <div>
      <BlogPage slug={slug} />
    </div>
  );
}
