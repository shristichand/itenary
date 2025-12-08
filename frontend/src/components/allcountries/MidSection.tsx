import { MapPin } from "lucide-react";
import { Typography } from "../common/Typography";
import { Chip } from "../common/Chip";
import { Itenary } from "./Itenary";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";

interface MidSectionProps {
    description?: string;
    places: { text: string; icon: string }[];
    itinerary: { day: string; lists: string[] }[];
}

export const MidSection = ({ description, places, itinerary }: MidSectionProps) => {
    return (

        <div className="space-y-5 ">
            <div className="space-y-3">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323] max-md:text-[1rem] max-md:leading-[1.75rem]">
                    Top Overview
                </Typography>

                <Typography styleName="p3" weight="regular" variant="h1" className="text-[#242323] max-md:leading-[1.375rem]">
                    {description}
                </Typography>
            </div>

            <div className="space-y-5">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323] max-md:text-[1rem] max-md:leading-[1.75rem]">
                    Places You'll Visit
                </Typography>

                <div className="flex flex-wrap gap-4 md:gap-5">
                    {
                        places.map((item, index) => (
                            <Chip key={index} text={item.text} icon={<MapPin />} />
                        ))
                    }
                </div>
            </div>

            <div className="space-y-5">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323] max-md:text-[1rem] max-md:leading-[1.75rem]">
                    Detailed Itinerary
                </Typography>

                <div className="space-y-5 max-md:flex max-md:flex-wrap">
                    {
                        itinerary.map((item, index) => (
                            <Itenary key={index} day={item.day} lists={item.lists} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};