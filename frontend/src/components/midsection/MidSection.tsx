import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";

const cards = [
    {
        title: "15+ Years",
        subtitle: "Of Experience",
        icon: "/image/icons/medal.svg",
    },
    {
        title: "15+ Years",
        subtitle: "Of Experience",
        icon: "/image/icons/medal.svg",
    },
    {
        title: "15+ Years",
        subtitle: "Of Experience",
        icon: "/image/icons/medal.svg",
    },
    {
        title: "15+ Years",
        subtitle: "Of Experience",
        icon: "/image/icons/medal.svg",
    },
]

export const MidSection = () => {
    return (
        <MaxWidthWrapper>
            <div className="flex gap-[1.6669rem] py-10">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} subtitle={card.subtitle} icon={card.icon} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
};