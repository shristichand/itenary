import { Typography } from "../common/Typography";

interface ItenaryProps {
  day: string;
  lists: string[];   
}

export const Itenary = ({ day, lists }: ItenaryProps) => {
  return (
    <div className="w-full md:w-187.5 space-y-2 rounded-[.5rem] p-5 bg-neutral-100">
      <Typography
        styleName="p3"
        weight="medium"
        variant="p"
        className="text-[#000000]"
      >
        {day}
      </Typography>

      <ul className="list-disc list-inside ml-4">  {/* you can tweak list styling */}
        {lists.map((desc, idx) => (
          <li key={idx} className="text-[#242323]">  {/* you can add Tailwind classes */}
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
