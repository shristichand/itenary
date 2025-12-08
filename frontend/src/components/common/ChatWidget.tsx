"use client";
import { MessageCircle, X, Send, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../../api/chat/chat";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from "next/image";
import { Typography } from "../common/Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean; time: string }[]>([
        {
            text: "Hi! 👋 Welcome to Arc Global Tours & Travel. I'm here to help you plan your perfect adventure. How can I assist you today?",
            isUser: false,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        if (!isLoading && isOpen) {
            // Small timeout to ensure the disabled attribute is removed from DOM
            setTimeout(() => {
                inputRef.current?.focus();
            }, 10);
        }
    }, [isLoading, isOpen]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {
            text: input,
            isUser: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);
        // Focus will be handled by useEffect when isLoading becomes false

        try {
            const response = await sendMessage(input);
            const botMessage = {
                text: response.reply,
                isUser: false,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage = {
                text: "Sorry, I'm having trouble connecting right now. Please try again later.",
                isUser: false,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed max-md:top-0 right-0 left-0 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div className="w-full h-dvh md:w-100 md:h-150 bg-[#E8E8E8] rounded-[.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-[#1D4197] p-4 flex justify-between items-center shrink-0">
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
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex flex-col gap-1 ${msg.isUser ? 'items-end' : ''}`}>
                                <div className={`flex gap-3 max-w-[85%] ${msg.isUser ? 'flex-row-reverse' : ''}`}>
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                        {msg.isUser ? (
                                            <User className="w-4 h-4 text-[#1D4197]" />
                                        ) : (
                                            <Image
                                                src="/image/logo/logo.svg"
                                                alt="Bot"
                                                width={16}
                                                height={16}
                                                className="w-4 h-4 object-contain"
                                            />
                                        )}
                                    </div>
                                    <div className={`p-3 rounded-2xl shadow-sm ${msg.isUser ? 'bg-white rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                                        <div className="text-[#242323] text-sm prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0">
                                            {msg.isUser ? (
                                                <Typography styleName="p3" weight="regular" className="text-[#242323]">
                                                    {msg.text}
                                                </Typography>
                                            ) : (
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        p: (props) => <p className="mb-2 last:mb-0" {...props} />,
                                                        ul: (props) => <ul className="list-disc ml-4 mb-2" {...props} />,
                                                        ol: (props) => <ol className="list-decimal ml-4 mb-2" {...props} />,
                                                        li: (props) => <li className="mb-1" {...props} />,
                                                        strong: (props) => <span className="font-semibold text-[#1D4197]" {...props} />,
                                                        a: (props) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                                    }}
                                                >
                                                    {msg.text}
                                                </ReactMarkdown>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Typography styleName="p3" weight="regular" className={`text-[#606060] text-[10px] ${msg.isUser ? 'mr-11' : 'ml-11'}`}>
                                    {msg.time}
                                </Typography>
                            </div>
                        ))}
                        {isLoading && (
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
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-[#E8E8E8] shrink-0">
                        <div className="flex gap-2 items-center">
                            <Input
                                ref={inputRef}
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                disabled={isLoading}
                                className="bg-[#E8E8E8] border-none focus-visible:ring-0 placeholder:text-[#A4A4A4] text-[#242323]"
                            />
                            <Button
                                size="icon"
                                onClick={handleSendMessage}
                                disabled={isLoading || !input.trim()}
                                className="bg-[#1D4197] hover:bg-[#153275] rounded-[.5rem] w-10 h-10 shrink-0"
                            >
                                <Send className="w-5 h-5 text-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {!isOpen && (
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-15 h-15 p-4 fixed bottom-10 right-10 bg-[#1D4197] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#153275] transition-colors duration-300"
                >
                    <MessageCircle className="text-white w-7 h-7" />
                </div>
            )}
        </div>
    );
};
