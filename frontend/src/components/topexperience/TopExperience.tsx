import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "../region/Card";


const regionData = [
    {
        image: "/Thailand.png",
        country: "Kuta & Seminyak Beach Escape",
        continent: "Beach clubs, surfing, shopping, and stunning sunsets.",
        link: "/"
    },
    {
        image: "/Dubai.png",
        country: "Janakpur Cultural Experience",
        continent: "Birthplace of Goddess Sita and Mithila culture.",
        link: "/"
    },
    {
        image: "/Vietnam.png",
        country: "Vietnam",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/Singapore.png",
        country: "Singapore",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/Maldives.png",
        country: "Maldives",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/"
    },

]
export const TopExperience = () => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-10 py-10 ">
                    <SubHeadingContainer headingtext="Our Top Experiences" paragraphtext="Carefully curated tour packages designed to showcase the best each destination has to offer." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {regionData.map((item, index) => (
                            <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link} />
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};