import { getStatData } from "@/api/home";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";

const icons = [
    "/image/icons/medal.svg",
    "/image/icons/globe.svg",
    "/image/icons/travellers.svg",
    "/image/icons/safe.svg",
]
export const MidSection = async () => {
    let stats = [];
    try {
        const res = await getStatData();
        stats = res?.data || [];
    } catch (error) {
        console.error("Failed to fetch stats:", error);
    }

    return (
        <MaxWidthWrapper>
            <div className="flex gap-[1.6669rem] py-10">
                {stats.map((card: any, index: number) => (
                    <Card
                        key={index}
                        title={card.Title}
                        subtitle={card.Description}
                        icon={icons[index]}
                    />
                ))}
            </div>
        </MaxWidthWrapper>
    );
};