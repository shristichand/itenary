import { Send } from "lucide-react";
import { Typography } from "../common/Typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const FormSection = () => {
    return (
        <div className="basis-1/2 h-fit p-5 rounded-[.5rem] shadow-[#00000040] shadow-[0px_4px_20px_0px] space-y-5 bg-neutral-100">
            <div className="space-y-3">
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Your Name</Typography>
                    <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Email</Typography>
                    <Input placeholder="Enter your email" />
                </div>
                <div className="space-y-1">
                    <Typography styleName="p3" variant="p" weight="medium" className="text-[#242323]">Message</Typography>
                    <Textarea placeholder="Enter your message" className="resize-none " rows={4}/>
                </div>
            </div>

            <Button variant="default" className="w-full py-[.5625rem] px-[12.9688rem]">
                <Typography styleName="p3" variant="p" weight="semibold" className="text-neutral-100">
                    Send Message</Typography>
                <Send className="w-5" />
            </Button>
        </div>
    );
};