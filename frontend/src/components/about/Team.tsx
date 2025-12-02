import Image from "next/image"
import { Typography } from "../common/Typography"

export const Team = ({img, name, position}: {img: string, name: string, position: string}) => {
    return (
        <div className="w-50 space-y-1">
            <div className="w-50 h-50 ">
                <Image
                    src={img}
                    alt="team1"
                    width={500}
                    height={500}
                    className="w-50 h-50 rounded-full"
                />
            </div>

            <div className="space-y-1 px-[2.4688rem]">
                <Typography styleName="p5" variant="p" weight="semibold" className="text-[#242323] text-center">
                    {name}
                </Typography>

                <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] text-center">
                    {position}
                </Typography>
            </div>
        </div>
    )
}