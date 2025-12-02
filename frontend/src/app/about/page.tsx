import { OurValues } from "@/components/about/OurValues";
import { Tag } from "@/components/about/Tag";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutSection } from "@/components/aboutsection/AboutSection";

export default function About() {
    return (
        <div>
            <AboutSection />
            <Tag />
            <OurValues />
            <TeamSection />
        </div>
    )
}