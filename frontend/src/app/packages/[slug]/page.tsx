import { Package } from "@/components/allcountries/Package";

type PageProp = Promise<{ slug: string }>;

export default async function PackagePage({ params }: { params: PageProp }) {
  const { slug } = await params;

  return (
    <div>
      <Package slug={slug} />
    </div>
  );
}
