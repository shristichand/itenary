import Image from "next/image";
import { Typography } from "../common/Typography";

export const Card = ({ title, subtitle, icon, color }: { title: string, subtitle: string, icon: string, color: string }) => {
    return (
        <div className="rounded-[.5rem] px-5 pt-5 pb-10.5   " style={{ backgroundColor: color }}>
            <div className="flex flex-col gap-3">
            <div className="w-[1.5156rem] h-[1.5156rem] ">
                <Image          
                    src={icon}
                    alt="whyus"
                    width={40}
                    height={40}
                    className="w-[1.5156rem] h-[1.5156rem]"
                />
            </div>

            
            <Typography styleName="p3" variant="p" weight="semibold" className="text-[#242323]">
                {title}
            </Typography>

            <Typography styleName="p2" variant="p" weight="regular" className="text-neutral-900">
                {subtitle}
            </Typography>
            </div>
        </div>
    );
};