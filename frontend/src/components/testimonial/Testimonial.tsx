import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { Card } from "./Card";


const testimonialData = [
    {
        testimonial: "Our trip to Bali was absolutely perfect! The itinerary was well-planned with a perfect balance of adventure and relaxation. Our guide was knowledgeable and friendly. Can't wait to book another trip with Wanderlust!",
        star: 5,
        image: "/image/country/Dubai.png",
        name: "John Doe",
        location: "Dubai"
    },
    {
        testimonial: "Our trip to Bali was absolutely perfect! The itinerary was well-planned with a perfect balance of adventure and relaxation. Our guide was knowledgeable and friendly. Can't wait to book another trip with Wanderlust!",
        star: 3,
        image: "/image/country/Dubai.png",
        name: "John Doe",
        location: "Dubai"
    },
    {
        testimonial: "Our trip to Bali was absolutely perfect! The itinerary was well-planned with a perfect balance of adventure and relaxation. Our guide was knowledgeable and friendly. Can't wait to book another trip with Wanderlust!",
        star: 1,
        image: "/image/country/Dubai.png",
        name: "John Doe",
        location: "Dubai"
    },

]
export const Testimonial = () => {
    return (
        <section>
            <MaxWidthWrapper>
                <div className="space-y-5 py-10 ">
                    <SubHeadingContainer headingtext="What Our Travelers Say" paragraphtext="Real experiences from real travelers who have explored the world with us." />
                    <div className="flex flex-wrap justify-center gap-x-7.5 gap-y-10 ">
                        {testimonialData.map((item, index) => (
                            <Card key={index} testimonial={item.testimonial} star={item.star} image={item.image} name={item.name} location={item.location} />
                        ))}
                    </div>
                </div>

            </MaxWidthWrapper>
        </section>
    );
};