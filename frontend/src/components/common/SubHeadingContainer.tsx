import { SubHeading } from "./SubHeading";
import { Typography } from "./Typography";

export const SubHeadingContainer = ({ headingtext, paragraphtext, left }: { headingtext: string, paragraphtext: string, left?: boolean }) => {
    return (
        <div className={`flex flex-col justify-center items-center ${left && 'text-left items-start'}`}>
            <SubHeading text={headingtext} />
            <div className="p-[.625rem] max-w-199.25  max-md:w-[25rem] max-md:p-[.625rem] ">
                <Typography styleName="p5" weight="regular" className="text-neutral-900 text-center max-md:text-[.875rem] max-md:leading-[1.3125rem]">
                    {paragraphtext}
                </Typography>
            </div>

        </div>
    );
};