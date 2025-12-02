"use client";
import { MessageCircle, X, Send, User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Typography } from "../common/Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="w-100 h-150 bg-[#E8E8E8] rounded-[.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-[#1D4197] p-4 flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                <Image
                                    src="/image/logo/logo.svg"
                                    alt="Logo"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <div>
                                <Typography styleName="p5" weight="semibold" className="text-white">
                                    Arc Global tours & travel PVT.LTD
                                </Typography>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
                                    <Typography styleName="p3" weight="regular" className="text-white/80 text-xs">
                                        Online
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6">
                        {/* Incoming Message */}
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-3 max-w-[85%]">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                    <Image
                                        src="/image/logo/logo.svg"
                                        alt="Bot"
                                        width={16}
                                        height={16}
                                        className="w-4 h-4 object-contain"
                                    />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm">
                                    <Typography styleName="p3" weight="regular" className="text-[#242323]">
                                        Hi! 👋 Welcome to WanderLust Travel. I'm here to help you plan your perfect adventure. How can I assist you today?
                                    </Typography>
                                </div>
                            </div>
                            <Typography styleName="p3" weight="regular" className="text-[#606060] text-[10px] ml-11">
                                08:03 PM
                            </Typography>
                        </div>

                        {/* Outgoing Message */}
                        <div className="flex flex-col gap-1 items-end">
                            <div className="flex gap-3 max-w-[85%] flex-row-reverse">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                    <User className="w-4 h-4 text-[#1D4197]" />
                                </div>
                                <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm">
                                    <Typography styleName="p3" weight="regular" className="text-[#242323]">
                                        I need some information.
                                    </Typography>
                                </div>
                            </div>
                            <Typography styleName="p3" weight="regular" className="text-[#606060] text-[10px] mr-11">
                                08:03 PM
                            </Typography>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-[#E8E8E8]">
                        <div className="flex gap-2 items-center">
                            <Input
                                placeholder="Type your message..."
                                className="bg-[#E8E8E8] border-none focus-visible:ring-0 placeholder:text-[#A4A4A4] text-[#242323]"
                            />
                            <Button size="icon" className="bg-[#1D4197] hover:bg-[#153275] rounded-[.5rem] w-10 h-10 shrink-0">
                                <Send className="w-5 h-5 text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-[3.75rem] h-[3.75rem] p-4 bg-[#1D4197] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#153275] transition-colors duration-300"
            >
                {isOpen ? (
                    <X className="text-white w-7 h-7" />
                ) : (
                    <MessageCircle className="text-white w-7 h-7" />
                )}
            </div>
        </div>
    );
};
