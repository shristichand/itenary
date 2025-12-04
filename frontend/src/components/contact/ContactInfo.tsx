import Image from "next/image";
import { Typography } from "../common/Typography";
import { Mail, MapPin, Phone } from "lucide-react";
import { getContactInfo } from "../../api/home";

export const ContactInfo = async () => {
    const contactRes = await getContactInfo();
    const contactData = contactRes?.data[0];

    
    return (
        <div className="basis-1/2 p-5 space-y-5 rounded-[.5rem] shadow-[#00000040] shadow-[0px_4px_20px_0px] bg-neutral-100">
            <Typography styleName="p6" variant="p" weight="semibold" className="text-[#242323]">
                Contact Information
            </Typography>

            <div className="space-y-5">
                <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2563EB1A]">
                        <MapPin className="w-5 text-neutral-900" strokeWidth={1} />
                    </div>
                    <div >
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] ">
                            Location
                        </Typography>
                        <Typography styleName="p3" variant="p" weight="regular" className="text-neutral-800 ">
                            {contactData?.Location}
                        </Typography>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2563EB1A]">
                        <Phone className="w-4 text-neutral-900" strokeWidth={1} />
                    </div>
                    <div >
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] ">
                            Phone
                        </Typography>
                        <Typography styleName="p3" variant="p" weight="regular" className="text-neutral-800 ">
                            {contactData?.PhoneNumber1}/{contactData?.PhoneNumber2}
                        </Typography>
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2563EB1A]">
                        <Mail className="w-4 text-neutral-900" strokeWidth={1} />
                    </div>
                    <div >
                        <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323] ">
                            Email
                        </Typography>
                        <Typography styleName="p3" variant="p" weight="regular" className="text-neutral-800 ">
                            {contactData?.Email}
                        </Typography>
                    </div>
                </div>

                <div className="w-135 h-50 bg-[#D2D2D2] rounded-[.5rem] overflow-clip">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32424.48226169533!2d85.26835799217223!3d27.680174293511364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1814d1da760b%3A0xdbd29350787694aa!2sTribhuvan%20University!5e1!3m2!1sen!2snp!4v1764583499426!5m2!1sen!2snp" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};