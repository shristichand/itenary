import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Typography } from "../common/Typography"

export const Tag = () => {
    return (
        <MaxWidthWrapper>
            <div className="w-full rounded-[.5rem] py-10 px-5 bg-gradient-to-r from-[#0D47A1] to-[#666666]">
                <div className="flex gap-15">
                    <div className="space-y-1">
                        <Typography styleName="p3" weight="medium" variant="p" className="text-primary-100">
                            About Us
                        </Typography>
                        <Typography styleName="p3" weight="medium" variant="p" className="text-primary-100">
                            To inspire and enable people to explore the world through carefully crafted, sustainable travel experiences that respect local cultures and environments while creating lasting memories.
                        </Typography>
                    </div>

                    <div className="space-y-1">
                        <Typography styleName="p3" weight="medium" variant="p" className="text-primary-100">
                            Our Vision
                        </Typography>
                        <Typography styleName="p3" weight="medium" variant="p" className="text-primary-100">
                            To become the world's most trusted travel partner, known for exceptional service, authentic experiences, and a commitment to making travel accessible and meaningful for everyone.
                        </Typography>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}