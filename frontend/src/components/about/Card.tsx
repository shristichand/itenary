import Image from "next/image"
import { Typography } from "../common/Typography"

export const Card = ({img, text, description}: {img: string, text: string, description: string}) => {
    return (
        <div className="w-70 p-5 bg-neutral-100 rounded-[.5rem]">
            <div className="space-y-3">


                <div className="w-8 h-8">
                    <Image
                        src={img}
                        alt="heart"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>

                <div className="space-y-3">
                    <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-1000">
                        {text}
                    </Typography>

                    <Typography styleName="p2" variant="p" weight="regular" className="text-neutral-900" >
                        {description}
                    </Typography>
            </div>
            </div>
        </div>
    )
}