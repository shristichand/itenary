import { MapPin } from "lucide-react";
import { Typography } from "../common/Typography";
import { Chip } from "../common/Chip";
import { Itenary } from "./Itenary";

interface MidSectionProps {
    description?: string;
    places: { text: string; icon: string }[];
    itinerary: { day: string; lists: string[] }[];
}

export const MidSection = ({ description, places, itinerary }: MidSectionProps) => {
    return (
        <div className="space-y-5">
            <div className="space-y-3">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                    Top Overview
                </Typography>

                <Typography styleName="p3" weight="regular" variant="h1" className="text-[#242323]">
                    {description}
                </Typography>
            </div>

            <div className="space-y-5">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                    Places You'll Visit
                </Typography>

                <div className="flex flex-wrap gap-5">
                    {
                        places.map((item, index) => (
                            <Chip key={index} text={item.text} icon={<MapPin />} />
                        ))
                    }
                </div>
            </div>

            <div className="space-y-5">
                <Typography styleName="p6" weight="semibold" variant="h1" className="text-[#242323]">
                    Detailed Itinerary
                </Typography>

                <div className="space-y-5">
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