"use client"
import Link from "next/link";
import { Typography } from "../common/Typography";
import { SendReview } from "./SendReview";
import { Review } from "./Review";
import { useQuery } from "@tanstack/react-query";
import { getReviewByPackageId } from "../../api/review";
import { Card } from "../testimonial/Card";

interface BottomSectionProps {
    packageId: string;
}

export const BottomSection = ({ packageId }: BottomSectionProps) => {
    const { data: reviewsData } = useQuery({
        queryKey: ["reviews", packageId],
        queryFn: () => getReviewByPackageId(packageId),
        enabled: !!packageId,
    });

    const reviews = reviewsData?.data || [];

    return (
        <div className="pt-5 space-y-5  md:max-w-300 md:mx-auto ">
            <div className="flex justify-between items-center max-md:px-4">
                <Typography styleName="p6" variant="h1" weight="semibold" className="text-[#242323]">
                    Traveler Reviews
                </Typography>

                {/* <Link href="/reviews">
                    <Typography styleName="p6" variant="h1" weight="semibold" className="text-[#242323]">
                        View All
                    </Typography>
                </Link> */}
            </div>

            <div className="flex  gap-10 justify-between max-md:flex max-md:flex-col ">
                <div className="max-md:hidden space-y-5 ">
                    {reviews.length > 0 ? (
                        reviews.map((review: any, index: number) => (
                            <Review
                                key={index}
                                star={review.Rating}
                                date={new Date(review.createdAt).toLocaleDateString()}
                                img="/image/icons/profileAvatar.png" // Placeholder image
                                name={review.Name}
                                location={review.Location}
                                review={review.Review}
                            />
                        ))
                    ) : (
                        <Typography styleName="p3" variant="p" weight="regular" className="text-neutral-500">
                            No reviews yet. Be the first to review!
                        </Typography>
                    )}
                </div>

                <div className="md:hidden flex  flex-nowrap px-4  overflow-x-auto  gap-4  snap-x snap-mandatory  pb-4 scrollbar-hide">
                    {reviews.map((review: any, index: number) => (
                        <div key={index} className="snap-center flex-shrink-0">
                            <Card testimonial={review.Review} star={review.Rating} image={review.image} name={review.Name} location={review.Location} />
                        </div>
                    ))}
                </div>
                <div>

                    <SendReview packageId={packageId} />
                </div>

            </div>
        </div>
    );
};