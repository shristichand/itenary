import { Typography } from "./Typography";
import type { ReactElement } from "react";

interface ChipProps {
  text: string;
  icon?: ReactElement;  // expect a JSX element (e.g. an icon component)
}

export const Chip = ({ text, icon }: ChipProps) => {
  return (
    <div>

      <div className="flex items-center gap-2 w-fit max-md:h-8  bg-[#FFFFFF] rounded-[.5rem] py-[.3125rem] px-3 ">
        {icon && (
          <span className="flex items-center justify-center text-primary-700 stroke-[.0625rem] size-4">
            {icon}
          </span>
        )}

        <Typography
          styleName="p3"
          weight="medium"
          variant="h1"
          className="text-[#242323] max-md:text-[.875rem] max-md:leading-[1.0625rem] whitespace-nowrap  "
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};
