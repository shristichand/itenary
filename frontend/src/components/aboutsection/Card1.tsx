import Image from "next/image";

export default function Card1() {
    return (
        <div className="w-69 h-64 rounded-2xl shadow-[#0c0c0c70] shadow-[0px_4px_10px_-4px]">
            <Image
                src="/image/about/layoutImage4.svg"
                alt="about"
                width={200}
                height={200}
                className="w-69 h-64 rounded-2xl "
            />
        </div>
    );
}