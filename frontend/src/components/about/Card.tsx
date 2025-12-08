import Image from "next/image"
import { Typography } from "../common/Typography"

export const Card = ({ img, text, description }: { img: string, text: string, description: string }) => {
    return (
        <div className="w-full md:w-70 p-4 md:p-5 bg-[#EFF6FF] rounded-[.25rem] md:rounded-[.5rem]">
            <div className="space-y-3">


                <div className=" md:w-8 md:h-8 max-md:pt-1 flex items-center justify-center ">
                    <Image
                        src={img}
                        alt="heart"
                        width={500}
                        height={500}
                        className="w-6 h-6 md:w-8 md:h-8"
                    />
                </div>

                <div className="md:space-y-3 space-y-2">
                    <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-1000">
                        {text}
                    </Typography>

                    <Typography styleName="p2" variant="p" weight="regular" className="text-neutral-900 text-justify" >
                        {description}
                    </Typography>
                </div>
            </div>
        </div>
    )
}