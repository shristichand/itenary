import { Card } from "./Card";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";


const regionData = [
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Dubai.png",
        country: "Dubai",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Vietnam.png",
        country: "Vietnam",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Singapore.png",
        country: "Singapore",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Maldives.png",
        country: "Maldives",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/"
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/"
    },
]
export const Region = () => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-10 py-10 ">
                    <SubHeadingContainer headingtext="Explore by Region" paragraphtext="Discover handpicked destinations from around the world, each offering unique experiences and unforgettable memories." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {regionData.map((item, index) => (
                            <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link}/>
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};