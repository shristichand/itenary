import Link from "next/link"
import { MaxWidthWrapper } from "../common/MaxWidthWrapper"
import { Typography } from "../common/Typography"
import { Button } from "../ui/button"

export const Last = () => {
    return (
        <div className="max-md:bg-white max-md:pt-10 max-md:pb-0">
            <div className="w-full md:w-[75rem] md:mx-auto mb-10 rounded-[.5rem] p-5 bg-gradient-to-r from-[#0D47A1] to-[#666666] space-y-1 ">
                <div className="max-md:w-full  ">
                    <Typography styleName="h6" weight="semibold" variant="p" className="text-[#FFFFFF] text-center max-md:text-[2rem] max-md:leading-[3rem]">
                        Ready to Start Your Adventure?
                    </Typography>
                </div>
                <div className="py-[.625rem]">
                    <Typography styleName="p5" weight="regular" variant="p" className="text-[#FFFFFF] text-center max-md:text-[.875rem] max-md:leading-[1rem]">
                        Join thousands of satisfied travelers who have discovered the world with us. Let's create your perfect journey together.
                    </Typography>
                </div>

                <div className="max-md:pt-4 mx-auto w-full md:w-fit grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                    <Link href="/destination">
                        <Button
                            variant="default"
                            className="mx-auto w-full py-[.5625rem] max-md:h-10 cursor-pointer px-5"

                        >
                            <Typography styleName="p3" weight="semibold" variant="p" className="text-[#FFFFFF] max-md:leading-[1.375rem]">
                                START EXPLORING
                            </Typography>
                        </Button>
                    </Link>

                    <Link href="/packages">
                        <Button
                            variant="default"
                            className="mx-auto w-full py-[.5625rem] max-md:h-10 cursor-pointer px-5 bg-transparent border-2 border-primary-700"

                        >
                            <Typography styleName="p3" weight="semibold" variant="p" className="text-[#FFFFFF] max-md:leading-[1.375rem]">
                                VIEW PACKAGES
                            </Typography>
                        </Button>
                    </Link>
                </div>

            </div >
        </div>
    )
}