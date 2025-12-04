import Image from "next/image";
import { Typography } from "../common/Typography";

export const Card = ({ title, subtitle, icon }: { title: string, subtitle: string, icon: string }) => {
    return (
        <div className="w-70 flex flex-col gap-5 items-center p-5 bg-neutral-100 shadow-[#00000040] shadow-[0px_4px_20px_0px] rounded-2xl">
            <div className="w-16 h-16 rounded-full bg-[#2563EB1A] grid place-items-center ">
                <Image
                    src={icon}
                    alt="midsection"
                    width={400}
                    height={400}
                    className="w-7 h-7 rounded-full"
                />
            </div>
            <div className="text-center ">
                <Typography styleName="h4" variant="h1" weight="medium" className="text-[#242323]">
                    {title}
                </Typography>

                <Typography styleName="p3" variant="p" weight="regular" className="text-[#606060]">
                    {subtitle}
                </Typography>


            </div>
        </div>
    );
};