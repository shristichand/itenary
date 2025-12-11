"use client";

import Image from "next/image";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Menu, X, Home, Building2, MapPin, Image as ImageIcon, Newspaper, ChevronLeft } from "lucide-react";

const menu = [
  {
    name: "Home",
    link: "/",
    icon: Home,
  },
  {
    name: "About us",
    link: "/about",
    icon: Building2,
  },
  {
    name: "Destination",
    link: "/destination",
    icon: MapPin,
  },
  {
    name: "Gallery",
    link: "/gallery",
    icon: ImageIcon,
  },
  {
    name: "Blog",
    link: "/blogs",
    icon: Newspaper,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push("/#contact");
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [isOpen])

  const isDetailPage = (pathname.startsWith('/blogs/') && pathname.split('/').length > 2) ||
    (pathname.startsWith('/packages/') && pathname.split('/').length > 2);

  return (
    <>
      <div className="w-full z-[998] flex justify-between px-5 md:px-15 py-4 md:h-20 h-[3.2294rem] fixed bg-neutral-100 items-center ">
        <div className="flex items-center gap-2">
          {isDetailPage && (
            <button onClick={() => router.back()} className="md:hidden">
              <ChevronLeft className="w-6 text-primary-700" />
            </button>
          )}
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-1">
              <div className="md:w-13 md:h-10 w-[2.3781rem] h-[1.8375rem]">
                <Image
                  src="/image/logo/logo.svg"
                  alt="Logo"
                  width={100}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:p-[.625rem] p-[.4581rem]">
                <Typography styleName="h3" weight="semibold" variant="p" className="text-primary-700">
                  A.R.C GLOBAL
                </Typography>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 justify-center items-center">
          {menu.map((item) => (
            <Link key={item.name} href={item.link}>
              <Typography styleName="h3" weight="medium" variant="p" className="text-neutral-1000">
                {item.name}
              </Typography>
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block w-30 h-10 ">
          <Button variant="default" onClick={handleContactClick} className="cursor-pointer">
            <Typography styleName="p6" weight="semibold" variant="p" className="text-neutral-100 ">
              Contact Us
            </Typography>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-7.75 h-6 stroke-[.125rem] text-[#000000]" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed h-dvh min-h-dvh inset-0 z-[998] bg-[#F0F0F0] flex flex-col gap-4 ">
          {/* Drawer Header */}
          <div className="flex items-center px-4 py-2 w-98.25 h-[3.2294rem] gap-2">
            <button onClick={() => setIsOpen(false)} className="mr-4">
              <ChevronLeft className="size-6 text-[#1D4197] stroke-[.125rem]" />
            </button>

            <div className="flex items-center gap-[.1831rem]">
              <div className=" w-[2.3781rem] h-[1.8375rem]">
                <Image
                  src="/image/logo/logo.svg"
                  alt="Logo"
                  width={100}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" p-[.4581rem]">
                <p className="text-[1rem] font-semibold leading-[1.2831rem] text-[#1D4197]">
                  A.R.C GLOBAL
                </p>
              </div>
            </div>
          </div>

          {/* Drawer Links */}
          <div className=" flex flex-col pl-4.25 pr-[.9375rem] gap-2 ">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className=""
              >
                <div className="flex items-center gap-4 py-[.625rem] hover:bg-neutral-200  border-b border-[#FFFFFF]">

                  <item.icon className="size-5 text-[#242323] stroke-[.125rem]" />
                  <p className="text-[1.25rem] leading-8.75 text-[#242323]">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Drawer Footer Button */}
          <div className=" flex justify-end py-[.4688rem] pr-4">
            <Button variant="default" onClick={handleContactClick} className="w-auto">
              <Typography styleName="p6" weight="semibold" variant="p" className="text-neutral-100 ">
                Contact us
              </Typography>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};