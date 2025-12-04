import Image from "next/image"

export const Card = ({img}: {img: string}) => {
    return (
        <div className="w-95 h-50 rounded-[.5rem] overflow-clip">
            <Image
                src={img}
                alt="Gallery"
                width={800}
                height={800}
                className="w-full h-full object-cover "
            />
        </div>
    )
}