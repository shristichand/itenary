import { Typography } from "./Typography";

export const SubHeading = ({text}: {text: string}) => {
    return (
        <div className="border-b-4 py-1 w-fit  border-primary-700">
            <Typography styleName="sub5" weight="semibold" className="text-neutral-1000 max-md:text-[1.5rem] max-md:leading-[1.8rem] ">
                {text}
            </Typography>
        </div>
    );
};