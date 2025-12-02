import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Description } from "./Description";
import { ImageLayout } from "./ImageLayout";

export const AboutSection = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex gap-10 py-10">
                <ImageLayout />
                <Description text="Your Journey, Our Expertise" description="For over 15 years, A.r.c. Global Tours & Travels  has been crafting unforgettable travel experiences for adventurers around the globe. We believe that travel is more than just visiting places; it's about creating stories that last a lifetime.
<br/>
<br/>

Our team of experienced travel consultants has explored the hidden corners of the world to bring you authentic, immersive experiences tailored to your preferences" />
            </div>
        </MaxWidthWrapper>
    );
}