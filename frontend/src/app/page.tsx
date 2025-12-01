import { TopExperience } from "@/components/topexperience/TopExperience";
import { Region } from "../components/region/Region";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { TravelInspiration } from "@/components/travelinspiration/TravelInspiration";
import { HeroSection } from "@/components/herosection/HeroSection";
import { MidSection } from "@/components/midsection/MidSection";
import { Whyus } from "@/components/whyus/Whyus";

export default function Home() {
  return (
    <div className=" ">
      <div >
        <HeroSection />
        <MidSection />
        <Whyus />
        <Region />
        <TopExperience />
        <Testimonial />
        <TravelInspiration />
      </div>
    </div>
  );
}
