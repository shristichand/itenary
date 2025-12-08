import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { SubHeading } from "../common/SubHeading"
import { Typography } from "../common/Typography"
import { Card } from "./Card"

const cardData = [
    {
        img: "/image/about/heart.svg",
        text: "Passion for Travel",
        description: "We live and breathe travel, bringing authentic experiences to every journey we create."
    },
    {
        img: "/image/about/user.svg",
        text: "Customer First",
        description: "Your satisfaction and safety are our top priorities in every decision we make."
    },
    {
        img: "/image/about/eye.svg",
        text: "Authentic Experiences",
        description: "We curate genuine, immersive experiences that connect you with local cultures."
    },
    {
        img: "/image/about/star.svg",
        text: "Excellence",
        description: "We maintain the highest standards in service, planning, and execution."
    }
]

export const OurValues = () => {
    return (
        <MaxWidthWrapper className="max-md:bg-white">
            <div className="w-full max-md:pt-10 max-md:pb-[3.5rem] space-y-5">
                <div>
                    <div className="mx-auto w-fit max-md:pt-4 ">
                        <SubHeading text="Our Values" />
                    </div>

                    <div className="mx-auto w-fit  border-primary-700 flex items-center">
                        <Typography styleName="h6" weight="semibold" className="text-neutral-1000">
                            What Drives Us
                        </Typography>
                    </div>

                    <div className="pt-[.875rem]">
                        <Typography styleName="p5" weight="regular" className="text-neutral-900 text-center">
                            Our core values guide every decision we make and every experience we create
                        </Typography>
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4  md:gap-[1.6669rem]">
                        {cardData.map((item, index) => (
                            <Card key={index} img={item.img} text={item.text} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}