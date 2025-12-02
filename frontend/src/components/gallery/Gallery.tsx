
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";

const images = [
    "/image/gallery/gallery1.png",
    "/image/gallery/gallery2.png",
    "/image/gallery/gallery3.png",
    "/image/gallery/gallery4.png",
    "/image/gallery/gallery5.png",
    "/image/gallery/gallery2.png",
    "/image/gallery/gallery3.png",
    "/image/gallery/gallery4.png",
    "/image/gallery/gallery5.png",
    "/image/gallery/gallery2.png",
    "/image/gallery/gallery3.png",
    "/image/gallery/gallery4.png",
    "/image/gallery/gallery5.png",
    "/image/gallery/gallery4.png",
    "/image/gallery/gallery5.png",
]

export const Gallery = () => {
    return (
        <MaxWidthWrapper>
            <div className="grid grid-cols-3 gap-x-7.5 gap-y-10">
                {images.map((img, index) => (
                    <Card key={index} img={img} />
                ))}
            </div>
        </MaxWidthWrapper>
    )
}