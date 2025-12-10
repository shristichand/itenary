import { Card } from "./Card";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";

interface RegionProps {
    packages: any[];
}

export const Region = ({ packages }: RegionProps) => {

    return (
        <section>
            <MaxWidthWrapper>
                <div className="md:space-y-10 space-y-4 py-10 ">
                    <SubHeadingContainer headingtext="Explore by Region" paragraphtext="Discover handpicked destinations from around the world, each offering unique experiences and unforgettable memories." />
                    <div className="flex flex-wrap justify-center md:gap-x-7.5 md:gap-y-10 gap-4">
                        {packages.length > 0 ? (
                            packages.map((item, index) => {
                                const attr = item.attributes || item;
                                const imageUrl = attr.Image?.url
                                    ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${attr.Image.url}`
                                    : "/image/country/Thailand.png";

                                return (
                                    <Card
                                        key={index}
                                        image={imageUrl}
                                        country={attr.country.name}
                                        continent={attr.continent.name}
                                        link={`/packages/${attr.Slug}`}
                                        description={attr.Description}
                                    />
                                );
                            })
                        ) : (
                            <p className="text-center text-neutral-500">No packages found.</p>
                        )}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};