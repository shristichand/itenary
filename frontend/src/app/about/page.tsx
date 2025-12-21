import { Last } from "@/components/about/Last";
import { OurValues } from "@/components/about/OurValues";
import { Tag } from "@/components/about/Tag";
import { TeamSection } from "@/components/about/TeamSection";
import { AboutSection } from "@/components/aboutsection/AboutSection";
import { getTeamData } from "@/api/home";
export const revalidate = 60;
export const runtime = 'edge';

export default async function About() {
    const teamsRes = await getTeamData();
    const teamsData = teamsRes?.data || [];
    console.log(teamsData, "Teams Data")
    return (
        <div>
            <AboutSection />
            <Tag />
            <OurValues />
            <TeamSection teamsData={teamsData} />
            <Last />
        </div>
    )
}