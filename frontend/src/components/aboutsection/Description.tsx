import Image from "next/image";
import { SubHeading } from "../common/SubHeading";
import { Typography } from "../common/Typography";

export const Description = ({ text, description }: { text: string, description: string }) => {
    return (
        <div className="flex flex-col gap-5">
            <div >
                <SubHeading text="About A.R.C. Global Tours & Travels" />
            </div>

            <div>
                <Typography styleName="sub6" weight="semibold" className="text-neutral-1000">
                    {text}
                </Typography>
            </div>

            <div>
                <Typography styleName="p4" weight="regular" className="text-[#242323]">
                    <span dangerouslySetInnerHTML={{ __html: description }}></span>
                </Typography>
            </div>

            <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB1A]">
                    <Image
                        src="/image/icons/globe.svg"
                        alt="about"
                        width={200}
                        height={200}
                        className="w-6 h-6 "
                    />
                </div>
                <div >
                    <Typography styleName="p4" weight="medium" className="text-[#242323] ">
                        Global Expertise
                    </Typography>
                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                        Access to exclusive destinations and local insights worldwide
                    </Typography>
                </div>
            </div>

            <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#2563EB1A]">
                    <Image
                        src="/image/icons/heart.svg"
                        alt="about"
                        width={200}
                        height={200}
                        className="w-6 h-6 "
                    />
                </div>
                <div >
                    <Typography styleName="p4" weight="medium" className="text-[#242323] ">
                        Personalized Service
                    </Typography>
                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                        Every journey is tailored to your unique preferences and dreams                    </Typography>
                </div>
            </div>
        </div>
    );
}