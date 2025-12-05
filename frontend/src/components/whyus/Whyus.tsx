import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { Card } from "./Card";

const data = [{
    title: "Easy Travel Assistance",
    subtitle: "From visa processing to airport pickups, we handle all the details so you can focus on enjoying your journey. ",
    icon: "/image/icons/plane.svg",
    color: "#EFF6FF"
}, {
    title: "Easy Travel Assistance",
    subtitle: "From visa processing to airport pickups, we handle all the details so you can focus on enjoying your journey. ",
    icon: "/image/icons/plane.svg",
    color: "#FFF7ED"
}, {
    title: "Easy Travel Assistance",
    subtitle: "From visa processing to airport pickups, we handle all the details so you can focus on enjoying your journey. ",
    icon: "/image/icons/plane.svg",
    color: "#F0FDF4"
}, {
    title: "Easy Travel Assistance",
    subtitle: "From visa processing to airport pickups, we handle all the details so you can focus on enjoying your journey. ",
    icon: "/image/icons/plane.svg",
    color: "#FAF5FF"
}]

export const Whyus = () => {
    return (
        <MaxWidthWrapper className="max-md:bg-white">

            <div className="space-y-5 md:py-10 py-6 ">
                <SubHeadingContainer headingtext="Why Choose Us" paragraphtext="We go beyond just booking trips. Here's what makes our travel experiences special." />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[1.6669rem] ">

                    {data.map((item, index) => (
                        <Card key={index} title={item.title} subtitle={item.subtitle} icon={item.icon} color={item.color} />
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};
