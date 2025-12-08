import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { getBlogs } from "@/api/blog";
import { Card } from "./Card";
import { getPackages } from "@/api/package";



export const TopExperience = async () => {
    let packageData: any[] = [];
    try {
        const res = await getPackages();
        packageData = res?.data || [];
    } catch (error) {
        console.log(error)
    }
    return (
        <section>
            <MaxWidthWrapper className="max-md:bg-white">
                <div className="space-y-4 md:space-y-10 py-4 md:py-10 ">
                    <SubHeadingContainer headingtext="Our Top Experiences" paragraphtext="Carefully curated tour packages designed to showcase the best each destination has to offer." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {/* if(regionData){ */}

                        {packageData.map((item: any, index: number) => (
                            <Card key={index} image={`${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${item?.Image?.url}`} country={item?.Title} continent={item?.Description} link={`/packages/${item?.Slug}`} location={item?.country?.name} days={item?.Days} nights={item?.Nights} />
                        ))}
                        {/* }else{
                        //      {regionData.map((item: any, index: number) => (
                        //     <Card key={index} image={item.image} country={item.country} continent={item.continent} link={item.link} />
                        // ))}
                        } */}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};