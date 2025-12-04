import { TopExperience } from "@/components/topexperience/TopExperience";
import { Region } from "../components/region/Region";
import { Testimonial } from "@/components/testimonial/Testimonial";
import { TravelInspiration } from "@/components/travelinspiration/TravelInspiration";
import { HeroSection } from "@/components/herosection/HeroSection";
import { MidSection } from "@/components/midsection/MidSection";
import { Whyus } from "@/components/whyus/Whyus";
import { AboutSection } from "@/components/aboutsection/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { getPackages } from "@/api/package";
import { getBlogs } from "@/api/blog";

export default async function Home() {
  let packages =  [];
  let blogs = [];

  try {
    const packagesRes = await getPackages();
    packages = packagesRes?.data || [];
    const blogsRes = await getBlogs();
    blogs = blogsRes?.data || [];
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
  }

  return (
    <div className=" ">
      <div >
        <HeroSection />
        <MidSection />
        <AboutSection />
        <Whyus />
        <Region packages={packages} />
        <TopExperience />
        <Testimonial />
        <TravelInspiration blogs={blogs} />
        <ContactSection />
      </div>
    </div>
  );
}
