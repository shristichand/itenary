import Image from "next/image";
import { Typography } from "../common/Typography";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "../ui/input-group";
import { Calendar, Mail, MapPin, Search } from "lucide-react";
import { Button } from "../ui/button";

export const HeroSection = () => {
    return (
        <div className="relative w-screen max-w-screen h-167.5 overflow-x-hidden">
            <Image
                src="/image/hero/hero.svg"
                alt="hero"
                width={500}
                height={500}
                className="w-full h-full object-cover object-bottom translate-y-[.0625rem]"
            />

            <div className="w-215 space-y-10  absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-60%]">
                <div className="flex flex-col  justify-center items-center gap-5">
                    <div className="w-157.25 space-y-5">
                        <Typography styleName="d2" weight="bold" variant="p" className="text-neutral-100 max-w-135 text-center">
                            Discover the World's Hidden Gems
                        </Typography>

                        <Typography styleName="p5" weight="regular" className="text-neutral-100 max-w-157.25 text-center">
                            Unforgettable adventures await. Let us guide you to the most breathtaking destinations around the globe.
                        </Typography>
                    </div>


                </div>

                <div >
                    <div className="w-full  bg-[#F0F0F0] p-5 rounded-[.5rem]">

                        <div className="flex flex-col gap-5">

                            <div className="flex gap-5 ">
                                <div className="w-full flex flex-col gap-2 ">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                                        Location
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 focus-visible:ring-0">
                                            <InputGroupInput placeholder="Where are you going ?" className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6" />
                                            <InputGroupAddon>
                                                <MapPin className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                            <InputGroupAddon align="inline-start">
                                                <InputGroupButton>

                                                </InputGroupButton>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                </div>

                                <div className="w-full flex flex-col gap-2 ">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-800 ">
                                        Date
                                    </Typography>

                                    <div>
                                        <InputGroup className="border border-neutral-400 focus-visible:ring-0">
                                            <InputGroupInput placeholder="Select a date" className="placeholder:text-neutral-800 placeholder:text-4 placeholder:leading-6" />
                                            <InputGroupAddon>
                                                <Calendar className="size-6 text-[#1D4197]" />
                                            </InputGroupAddon>
                                            <InputGroupAddon align="inline-start">
                                                <InputGroupButton>

                                                </InputGroupButton>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end ">
                                <Button variant="default" className="px-5! flex! items-center!">
                                    <Search className="w-5" />
                                    <Typography styleName="p3" weight="semibold" className="text-neutral-100">
                                        Search
                                    </Typography>
                                </Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
};