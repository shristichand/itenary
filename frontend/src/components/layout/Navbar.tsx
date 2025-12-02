"use client";

import Image from "next/image";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import Link from "next/link";

const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Destination",
    link: "/destination",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
];

export const Navbar = () => {


  return (
    <div className="w-full z-50 flex justify-between px-15 py-4 h-20 fixed bg-neutral-100">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <div className="w-13 h-10 ">
          <Image
            src="/image/logo/logo.svg"
            alt="Logo"
            width={100}
            height={20}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-[.625rem]">
          <Typography styleName="h3" weight="semibold" variant="p" className="text-primary-700">
            ARC GLOBAL
          </Typography>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-10 justify-center items-center">
        {menu.map((item) => (
          <Link key={item.name} href={item.link}>
            <Typography styleName="h3" weight="medium" variant="p" className="text-neutral-1000">
              {item.name}
            </Typography>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="w-30 h-10">
        <Button variant="default">
          <Typography styleName="p6" weight="semibold" variant="p" className="text-neutral-100">
            Contact Us
          </Typography>
        </Button>
      </div>
    </div>
  );
};