import Image from "next/image";

export default function Card1() {
    return (
        <div className=" md:w-69 md:h-64 w-full h-[10.8125rem] rounded-2xl overflow-hidden shadow-[#0c0c0c70] shadow-[0px_4px_10px_-4px]">
            <Image
                src="/image/about/layoutImage4.svg"
                alt="about"
                width={200}
                height={200}
                className="w-full h-full  object-cover"
            />
        </div>
    );
}