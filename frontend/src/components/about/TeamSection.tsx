"use client"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { SubHeading } from "../common/SubHeading"
import { Typography } from "../common/Typography"
import { Team } from "./Team"
import { useQuery } from "@tanstack/react-query"
import { getTeamData } from "@/api/home"

export const TeamSection = () => {
    const { data: teamData } = useQuery({
        queryKey: ["team-data"],
        queryFn: () => getTeamData()
    });

    const teams = teamData?.data || [];

    return (
        <MaxWidthWrapper>

            <div className="space-y-5 max-md:pt-4 max-md:pb-4">
                <div>
                    <div className="mx-auto w-fit  ">
                        <SubHeading text="Meet The Team" />
                    </div>
                    <div className="mx-auto w-fit  border-primary-700 flex items-center">
                        <Typography styleName="h6" weight="semibold" className="text-neutral-1000 max-md:text-[1.5rem] max-md:leading-[3rem]">
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
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-15">
                        {teams.length > 0 ? (
                            teams.map((item: any, index: number) => {
                                const imageUrl = item.Image?.url
                                    ? `${process.env.NEXT_PUBLIC_STRAPI_IMAGEURL || "http://localhost:1337"}${item.Image.url}`
                                    : "/image/about/team1.png";
                                return (
                                    <Team key={index} img={imageUrl} name={item.Name} position={item.Position} />
                                );
                            })
                        ) : (
                            <Typography styleName="p5" weight="regular" className="text-neutral-500">
                                Loading team members...
                            </Typography>
                        )}
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}