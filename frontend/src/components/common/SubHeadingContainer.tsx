import { SubHeading } from "./SubHeading";
import { Typography } from "./Typography";

export const SubHeadingContainer = ({headingtext, paragraphtext}: {headingtext: string, paragraphtext: string}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <SubHeading text={headingtext} />
            <div className="p-[.625rem] max-w-199.25 ">
            <Typography styleName="p5" weight="regular" className="text-neutral-900 text-center">
                {paragraphtext}
            </Typography>
            </div>
        </div>
    );
};