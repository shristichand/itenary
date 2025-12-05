import Image from "next/image";

export default function Card2() {
    return (
        <div className="md:w-69 md:h-48 w-full h-[10.8125rem] rounded-2xl overflow-hidden shadow-[#0c0c0c70] shadow-[0px_4px_10px_-4px]">
            <Image
                src="/image/about/layoutImage2.svg"
                alt="about"
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    );
}