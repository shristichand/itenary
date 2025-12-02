import Link from "next/link";
import { Typography } from "../common/Typography";
import { SendReview } from "./SendReview";
import { Review } from "./Review";

const reviewData = [{
    star: 5,
    date: "2025-12-02",
    img: "/image/about/team1.png",
    name: "John Doe",
    location: "New York, USA",
    review: "This is the best place I have ever been to. The food was amazing and the people were so friendly. I would highly recommend this place to everyone."
},
{
    star: 4,
    date: "2025-12-02",
    img: "/image/about/team2.png",
    name: "John Doe",
    location: "New York, USA",
    review: "This is the best place I have ever been to. The food was amazing and the people were so friendly. I would highly recommend this place to everyone."
},
{
    star: 3,
    date: "2025-12-02",
    img: "/image/about/team3.png",
    name: "John Doe",
    location: "New York, USA",
    review: "This is the best place I have ever been to. The food was amazing and the people were so friendly. I would highly recommend this place to everyone."
},
{
    star: 3,
    date: "2025-12-02",
    img: "/image/about/team3.png",
    name: "John Doe",
    location: "New York, USA",
    review: "This is the best place I have ever been to. The food was amazing and the people were so friendly. I would highly recommend this place to everyone."
},
{
    star: 3,
    date: "2025-12-02",
    img: "/image/about/team3.png",
    name: "John Doe",
    location: "New York, USA",
    review: "This is the best place I have ever been to. The food was amazing and the people were so friendly. I would highly recommend this place to everyone."
}
]

export const BottomSection = () => {
    return (
        <div className="pt-5 space-y-5">
            <div className="flex justify-between items-center">
                <Typography styleName="p6" variant="h1" weight="semibold" className="text-[#242323]">
                    Traveler Reviews
                </Typography>

                <Link href="/reviews">
                    <Typography styleName="p6" variant="h1" weight="semibold" className="text-[#242323]">
                        View All
                    </Typography>
                </Link>
            </div>

            <div className="flex gap-10 justify-between">
                <div className="space-y-5">
                    {reviewData.map((review, index) => (
                        <Review key={index} {...review} />
                    ))}
                </div>
                <SendReview />
            </div>
        </div>
    );
};