import { TopExperience } from "@/components/topexperience/TopExperience";
import { Region } from "../components/region/Region";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { TravelInspiration } from "@/components/travelinspiration/TravelInspiration";
import { HeroSection } from "@/components/herosection/HeroSection";
import { MidSection } from "@/components/midsection/MidSection";
import { Whyus } from "@/components/whyus/Whyus";
import { AboutSection } from "@/components/aboutsection/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className=" ">
      <div >
        <HeroSection />
        <MidSection />
        <AboutSection />
        <Whyus />
        <Region />
        <TopExperience />
        <Testimonial />
        <TravelInspiration />
        <ContactSection />
      </div>
    </div>
  );
}
