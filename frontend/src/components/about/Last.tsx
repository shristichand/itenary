import Link from "next/link"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Typography } from "../common/Typography"
import { Button } from "../ui/button"

export const Last = () => {
    return (
        <MaxWidthWrapper>
            <div className="w-full mb-10 rounded-[.5rem] p-5 bg-gradient-to-r from-[#0D47A1] to-[#666666] space-y-1">
                <Typography styleName="h6" weight="semibold" variant="p" className="text-[#FFFFFF] text-center">
                    Ready to Start Your Adventure?
                </Typography>
                <div className="py-[.625rem]">
                    <Typography styleName="p5" weight="regular" variant="p" className="text-[#FFFFFF] text-center">
                        Join thousands of satisfied travelers who have discovered the world with us. Let's create your perfect journey together.
                    </Typography>
                </div>

                <div className="mx-auto w-fit flex gap-10">
                    <Button
                        variant="default"
                        className="py-[.5625rem] cursor-pointer px-5"

                    >
                        <Typography styleName="p3" weight="semibold" variant="p" className="text-[#FFFFFF]">
                            START EXPLORING
                        </Typography>
                    </Button>

                    <Link href="/packages">
                        <Button
                            variant="default"
                            className="py-[.5625rem] cursor-pointer px-5 bg-transparent border-2 border-primary-700"

                        >
                            <Typography styleName="p3" weight="semibold" variant="p" className="text-[#FFFFFF] ">
                                VIEW PACKAGES
                            </Typography>
                        </Button>
                    </Link>
                </div>

            </div >
        </MaxWidthWrapper>
    )
}