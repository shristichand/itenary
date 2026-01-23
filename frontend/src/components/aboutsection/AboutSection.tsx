import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Description } from "./Description";
import { ImageLayout } from "./ImageLayout";

export const AboutSection = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row gap-10 py-[1rem] md:py-10">
                <ImageLayout />
                <Description
  text="Your Journey, Our Expertise"
  description="Established in 2082 B.S., A.R.C. Global Tours & Travels is a Nepal-based travel company providing national and international air ticketing, tour packages, and visa services.
<br/>
<br/>
We offer domestic tours to Kathmandu Valley, Pokhara, Chitwan, Janakpur, and Muktinath, with Kailash Mansarovar trips arranged on customer demand. Our international packages include Dubai, Malaysia, Thailand, Singapore, Maldives, Vietnam, and Bali, along with visa assistance for various Asian and European countries."
/>

            </div>
        </MaxWidthWrapper>
    );
}