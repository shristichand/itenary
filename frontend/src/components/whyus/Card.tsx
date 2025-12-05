import Image from "next/image";
import { Typography } from "../common/Typography";

export const Card = ({ title, subtitle, icon, color }: { title: string, subtitle: string, icon: string, color: string }) => {
    return (
        <div className="rounded-[.5rem] p-4 md:px-5 md:pt-5 md:pb-10.5   " style={{ backgroundColor: color }}>
            <div className="flex flex-col gap-2 md:gap-3">
                <div className="max-md:mx-auto w-[1.5156rem] h-[1.5156rem] max-md:my-1">
                    <Image
                        src={icon}
                        alt="whyus"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>


                <Typography styleName="p3" variant="p" weight="semibold" className="text-[#242323] max-md:leading-[1.125rem]">
                    {title}
                </Typography>

                <Typography styleName="p2" variant="p" weight="regular" className="text-neutral-900 max-md:text-[.625rem] max-md:leading-[1.0625rem]">
                    {subtitle}
                </Typography>
            </div>
        </div>
    );
};