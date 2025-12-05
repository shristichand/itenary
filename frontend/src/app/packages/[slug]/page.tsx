import { Package } from "@/components/allcountries/Package";
import { getPackageBySlug } from "@/api/package";

type PageProp = Promise<{ slug: string }>;

export const runtime = 'edge';
export const revalidate = 60;

export default async function PackagePage({ params }: { params: PageProp }) {
  const { slug } = await params;
  let packageData = null;

  try {
    const res = await getPackageBySlug(slug);
    // Assuming API returns array for filter query
    packageData = res?.data?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch package with slug ${slug}:`, error);
  }

  return (
    <div>
      <Package packageData={packageData} />
    </div>
  );
}
