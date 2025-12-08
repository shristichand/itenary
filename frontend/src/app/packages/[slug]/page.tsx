import { Package } from "@/components/allcountries/Package";
import { getPackageBySlug } from "@/api/package";
import { getGalleryByCountry } from "@/api/gallery";

type PageProp = Promise<{ slug: string }>;

export const runtime = 'edge';
export const revalidate = 60;

export default async function PackagePage({ params }: { params: PageProp }) {
  const { slug } = await params;
  let packageData = null;
  const allImages: string[] = [];


  try {
    const res = await getPackageBySlug(slug);
    // Assuming API returns array for filter query
    packageData = res?.data?.[0] || null;
    console.log(packageData.country.name)

    const country = packageData.country.name;

    const response = await getGalleryByCountry(country);
    const galleries = response?.data || [];

    // Extract all images from all gallery entries
    galleries.forEach((gallery: any) => {
      const images = gallery.Image || [];
      images.forEach((image: any) => {
        // Construct the full image URL
        const baseUrl = process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337";
        const imageUrl = image.url
          ? `${baseUrl}${image.url}`
          : "";

        if (imageUrl) {
          allImages.push(imageUrl);
        }
      });
    });
  } catch (error) {
    console.error("Failed to fetch gallery images:", error);
  }


  return (
    <div>
      <Package packageData={packageData} galleryImages={allImages} />
    </div>
  );
}
