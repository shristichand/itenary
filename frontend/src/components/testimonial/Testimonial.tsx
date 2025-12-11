import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";
import { getReviews } from "@/api/review";
import { useQuery } from "@tanstack/react-query";



export const Testimonial = async () => {

    const reviews = await getReviews();
    const reviewsData = reviews?.data;


    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-5 py-10 ">
                    <SubHeadingContainer headingtext="What Our Travelers Say" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex md:flex-wrap flex-nowrap md:justify-center overflow-x-auto md:overflow-visible gap-4 md:gap-x-7.5 md:gap-y-10 snap-x snap-mandatory md:px-0 pb-4 md:pb-0 scrollbar-hide">
                        {reviewsData?.map((item: any, index: number) => (
                            <div key={index} className="snap-center flex-shrink-0">
                                <Card testimonial={item.Review} star={item.Rating} image={item.image} name={item.Name} location={item.Location} />
                            </div>
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};