import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Typography } from "../common/Typography"

export const Tag = () => {
    return (
        <MaxWidthWrapper className="max-md:px-0">
            <div className="w-full rounded-[.5rem] py-4 mb-4 max-md:pr-[3.5rem] max-md:pl-4 md:py-10 md:px-5 bg-gradient-to-r from-[#0D47A1] to-[#666666]">
                <div className="flex max-md:flex-wrap gap-4 md:gap-15">
                    <div className="space-y-1">
                        <Typography styleName="p3" weight="medium" variant="p" className="text-neutral-100 max-md:text-[1rem] max-md:leading-[1.375rem] max-md:font-medium">
                            About Us
                        </Typography>
                        <Typography styleName="p3" weight="medium" variant="p" className="text-neutral-100 max-md:leading-[1.375rem]">
                            To inspire and enable people to explore the world through carefully crafted, sustainable travel experiences that respect local cultures and environments while creating lasting memories.
                        </Typography>
                    </div>

                    <div className="space-y-1">
                        <Typography styleName="p3" weight="medium" variant="p" className="text-neutral-100 max-md:text-[1rem] max-md:leading-[1.375rem] max-md:font-medium">
                            Our Vision
                        </Typography>
                        <Typography styleName="p3" weight="medium" variant="p" className="text-neutral-100 max-md:leading-[1.375rem]">
                            To become the world's most trusted travel partner, known for exceptional service, authentic experiences, and a commitment to making travel accessible and meaningful for everyone.
                        </Typography>
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}