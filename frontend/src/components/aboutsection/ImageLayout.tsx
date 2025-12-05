import { Typography } from "../common/Typography";
import Card1 from "./Card1";
import Card2 from "./Card2";

export const ImageLayout = () => {
    return (
        <div className="w-full md:w-147 h-fit md:h-130 flex gap-4">
            <div className="basis-1/2 md:pb-14 flex flex-col gap-4 ">
                <Card1 />
                <Card2 />
            </div>

            <div className="basis-1/2 relative md:pt-8 md:pb-6 md:pr-5 flex flex-col gap-4 ">
                <Card2 />
                <Card1 />
                <div className=" absolute -bottom-4 md:bottom-0 right-0 ">
                    <div className="w-25 h-25  flex flex-col gap-2 items-center py-[.875rem] px-[1.4063rem] rounded-[.75rem]  bg-primary-700">
                        <Typography styleName="h5" weight="semibold" className="text-neutral-100">
                            15+
                        </Typography>

                        <p className="font-inter text-neutral-100 text-[.85rem] leading-6 font-medium">Years</p>
                    </div>
                </div>
            </div>


        </div>
    );
}

