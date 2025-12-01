import { Typography } from "../common/Typography";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Links = [{
    name: "Home",
    href: "/"
}, {
    name: "About Us",
    href: "/about"
}, {
    name: "Destinations",
    href: "/destinations"
}, {
    name: "Contact",
    href: "/contact"
}]

const SocialLinks = [{
    icon: <Facebook className="size-4" />,
    name: "Facebook",
    href: "https://www.facebook.com/arcglobaltours"
}, {
    icon: <Instagram className="size-4" />,
    name: "Instagram",
    href: "https://www.instagram.com/arcglobaltours"
}, {
    icon: <Twitter className="size-4" />,
    name: "X",
    href: "https://twitter.com/arcglobaltours"
}]

const ContactInfo = [{
    icon: <MapPin className="size-4" />,
    name: "Address",
    value: "Pingalasthan-09, Gaushala, Kathmandu",
    href: "https://www.google.com/maps/place/Pingalasthan-09,+Gaushala,+Kathmandu"
}, {
    icon: <Phone className="size-4" />,
    name: "Phone",
    value: "9802016174/01-5925925",
    href: "tel:9802016174"
}, {
    icon: <Mail className="size-4" />,
    name: "Email",
    value: "arc.globaltravel123@gmail.com",
    href: "mailto:arc.globaltravel123@gmail.com"
}]

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className="bg-[#1D4197] text-neutral-100 ">
            <MaxWidthWrapper>
                <div className="flex justify-between py-10 h-54">
                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-3 w-67.5">
                        <Typography styleName="p6" weight="semibold" className="text-neutral-100">
                            A.r.c. Global Tours & Travels
                        </Typography>
                        <Typography styleName="p3" weight="regular" className="text-neutral-100">
                            Discover the world with our expert-crafted travel experiences. Creating memories that last a lifetime.
                        </Typography>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-3">
                        <Typography styleName="p6" weight="semibold" className="text-neutral-100">
                            Quick Links
                        </Typography>
                        <div className="flex flex-col gap-1">
                            {Links.map((link) => (
                                <Link href={link.href} className="hover:text-neutral-300 transition-colors">
                                    <Typography styleName="p3" weight="regular" className="text-neutral-100">{link.name}</Typography>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div className="flex flex-col gap-3">
                        <Typography styleName="p6" weight="semibold" className="text-neutral-100">
                            Contact Us
                        </Typography>
                        <div className="flex flex-col gap-1">
                            {ContactInfo.map((info) => (
                                <div className="flex items-center gap-3">
                                    {info.icon}
                                    <Typography styleName="p3" weight="regular" className="text-neutral-100">
                                        <Link target="_blank" href={info.href}>{info.value}</Link>
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Socials */}
                    <div className="flex flex-col gap-3">
                        <Typography styleName="p6" weight="semibold" className="text-neutral-100">
                            Socials
                        </Typography>
                        <div className="flex flex-col gap-1">
                            {SocialLinks.map((link) => (
                                <Link target="_blank" href={link.href} className="flex items-center gap-3 hover:text-neutral-300 transition-colors">
                                    {link.icon}
                                    <Typography styleName="p3" weight="regular" className="text-neutral-100">{link.name}</Typography>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* Bottom Bar */}
            <div className="bg-[#112556] py-2 h-9.5">
                <MaxWidthWrapper>
                    <Typography styleName="p3" weight="regular" className="text-center text-neutral-100">
                        Copyright © {currentYear} A.r.c. Global Tours & Travels. All rights reserved.
                    </Typography>
                </MaxWidthWrapper>
            </div>
        </footer>
    );
};