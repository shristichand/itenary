import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { SubHeading } from "../common/SubHeading"
import { Typography } from "../common/Typography"
import { Team } from "./Team"

const teamData = [
    {
        img: "/image/about/team1.png",
        name: "John Doe",
        position: "Founder & CEO"
    },
    {
        img: "/image/about/team2.png",
        name: "Jane Smith",
        position: "Co-Founder"
    },
    {
        img: "/image/about/team3.png",
        name: "Alice Johnson",
        position: "Marketing Head"
    }
]

export const TeamSection = () => {
    return (
        <MaxWidthWrapper>

            <div className="space-y-5">
                <div>
                    <div className="mx-auto w-fit  ">
                        <SubHeading text="Meet The Team" />
                    </div>
                    <div className="mx-auto w-fit  border-primary-700 flex items-center">
                        <Typography styleName="h6" weight="semibold" className="text-neutral-1000">
                            The People Behind Your Journey
                        </Typography>
                    </div>

                    <div className="pt-[.875rem]">
                        <Typography styleName="p5" weight="regular" className="text-neutral-900 text-center">
                            Passionate travel experts dedicated to making your dreams a reality
                        </Typography>
                    </div>
                </div>

                <div className="mx-auto w-fit">
                    <div className="flex  items-center gap-15">
                        {teamData.map((item, index) => (
                            <Team key={index} img={item.img} name={item.name} position={item.position} />
                        ))}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}