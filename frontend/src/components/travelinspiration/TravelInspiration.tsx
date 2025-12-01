import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";


const blogData = [
    {
        image: "/Dubai.png",
        date: "25 Dec 2024",
        name: "John Doe",
        title: "Top 10 Hidden Beaches in Southeast Asia",
        description: "Discover secluded paradises away from the tourist crowds in Thailand, Indonesia, and the Philippines."
    },
  {
        image: "/Dubai.png",
        date: "25 Dec 2024",
        name: "John Doe",
        title: "Top 10 Hidden Beaches in Southeast Asia",
        description: "Discover secluded paradises away from the tourist crowds in Thailand, Indonesia, and the Philippines."
    },
   {
        image: "/Dubai.png",
        date: "25 Dec 2024",
        name: "John Doe",
        title: "Top 10 Hidden Beaches in Southeast Asia",
        description: "Discover secluded paradises away from the tourist crowds in Thailand, Indonesia, and the Philippines."
    },

]
export const TravelInspiration = () => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-5 py-10 ">
                    <SubHeadingContainer headingtext="Travel Inspiration" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {blogData.map((item, index) => (
                            <Card key={index} image={item.image} date={item.date} name={item.name} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};