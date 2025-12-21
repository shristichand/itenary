import { SubHeadingContainer } from "@/components/common/SubHeadingContainer";
import { Gallery } from "@/components/gallery/Gallery";

export const runtime = 'edge';

export default function GalleryPage() {
    return (
        <div className="py-10">
            <div className="md:hidden pb-4">
             <SubHeadingContainer headingtext="Journey Through Images" paragraphtext="Let these photos take you to new places—one frame at a time." />
            </div>
            <Gallery />
        </div>
    )
}