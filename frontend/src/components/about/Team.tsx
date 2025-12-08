import Image from "next/image"
import { Typography } from "../common/Typography"

export const Team = ({ img, name, position }: { img: string, name: string, position: string }) => {
    return (
        <div className="w-full md:w-50 space-y-1">
            <div className="w-25 h-25 md:w-50 md:h-50 ">
                <Image
                    src={img}
                    alt="team1"
                    width={500}
                    height={500}
                    className="w-full h-full md:w-50 md:h-50 rounded-full "
                />
            </div>

            <div className="space-y-1 px-[.4375rem] md:px-[2.4688rem] ">
                <Typography styleName="p5" variant="p" weight="semibold" className="text-[#242323] text-center max-md:text-[.875rem] max-md:leading-4">
                    {name}
                </Typography>

                <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] text-center max-md:text-[.625rem] max-md:leading-[.75rem] whitespace-nowrap">
                    {position}
                </Typography>
            </div>
        </div>
    )
}