import { Typography } from "../common/Typography";
import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { getContactInfo, getSocialLinks } from "../../api/home";

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

const currentYear = new Date().getFullYear();

export const Footer = async () => {
    let contactData = null;
    let socialData = [];


    const contactRes = await getContactInfo();
    contactData = contactRes.data[0];
    const socialRes = await getSocialLinks();
    socialData = socialRes?.data[0] || [];

    // Fallback or mapped data
    const address = contactData?.Location;

    const phone = contactData.PhoneNumber1 + (contactData.PhoneNumber2 ? "/" + contactData.PhoneNumber2 : "");

    const email = contactData?.Email;


    const ContactInfo = [{
        icon: <MapPin className="size-4" />,
        name: "Address",
        value: address,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    }, {
        icon: <Phone className="size-4" />,
        name: "Phone",
        value: phone,
        href: `tel:${phone.split('/')[0]}`
    }, {
        icon: <Mail className="size-4" />,
        name: "Email",
        value: email,
        href: `mailto:${email}`
    }]

    // Helper to get icon for social
    const getSocialIcon = (name: string) => {
        const lower = name.toLowerCase();
        if (lower.includes('facebook')) return <Facebook className="size-4" />;
        if (lower.includes('instagram')) return <Instagram className="size-4" />;
        if (lower.includes('twitter') || lower.includes('x')) return <Twitter className="size-4" />;
        return <Facebook className="size-4" />; // Default
    };

    const facebook = socialData?.Facebook;
    const instagram = socialData?.Instagram;
    const twitter = socialData?.Twitter;
    const socials = [
        {
            icon: <Facebook className="size-4" />,
            name: "Facebook",
            href: facebook
        },
        {
            icon: <Instagram className="size-4" />,
            name: "Instagram",
            href: instagram
        },
        {
            icon: <Twitter className="size-4" />,
            name: "Twitter",
            href: twitter
        }
    ]
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
                                <Link key={link.name} href={link.href} className="hover:text-neutral-300 transition-colors">
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
                                <div key={info.name} className="flex items-center gap-3">
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
                            {socials.map((link: any) =>
                                link.href ? (
                                    <Link
                                        target="_blank"
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-center gap-3 hover:text-neutral-300 transition-colors"
                                    >
                                        {link.icon}
                                        <Typography styleName="p3" weight="regular" className="text-neutral-100">
                                            {link.name}
                                        </Typography>
                                    </Link>
                                ) : null
                            )}
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