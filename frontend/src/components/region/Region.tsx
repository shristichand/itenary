import { Card } from "./Card";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";


const packages = [
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Dubai.png",
        country: "Dubai",
        continent: "Asia",
        link: "/packages/dubai-luxury",
        description: "Indulge in the luxury and modern wonders of Dubai."
    },
    {
        image: "/image/country/Vietnam.png",
        country: "Vietnam",
        continent: "Asia",
        link: "/packages/vietnam-culture",
        description: "Discover the rich history and landscapes of Vietnam."
    },
    {
        image: "/image/country/Singapore.png",
        country: "Singapore",
        continent: "Asia",
        link: "/packages/singapore-city",
        description: "Explore the modern marvels and green spaces of Singapore."
    },
    {
        image: "/image/country/Maldives.png",
        country: "Maldives",
        continent: "Asia",
        link: "/packages/maldives-honeymoon",
        description: "Relax in the paradise of the Maldives."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Malaysia.png",
        country: "Malaysia",
        continent: "Asia",
        link: "/packages/malaysia-nature",
        description: "Experience the diversity of Malaysia."
    },
    {
        image: "/image/country/Himalaya.png",
        country: "Himalaya",
        continent: "Asia",
        link: "/packages/himalaya-trek",
        description: "Trek through the majestic Himalayas."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
    {
        image: "/image/country/Thailand.png",
        country: "Thailand",
        continent: "Asia",
        link: "/packages/thailand-adventure",
        description: "Experience the vibrant culture and stunning islands of Thailand."
    },
]
export const Region = () => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-10 py-10 ">
                    <SubHeadingContainer headingtext="Explore by Region" paragraphtext="Discover handpicked destinations from around the world, each offering unique experiences and unforgettable memories." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {packages.map((item, index) => (
                            <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link} description={item.description} />
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};