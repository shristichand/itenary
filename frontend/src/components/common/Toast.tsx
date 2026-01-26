"use client";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);

    }, []);

    if (!mounted) return null;

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />,
    };

    const bgColors = {
        success: "bg-green-50 border-green-200",
        error: "bg-red-50 border-red-200",
        info: "bg-blue-50 border-blue-200",
    };

    return createPortal(
        <div className="fixed max-md:w-full max-md:px-4 top-5 md:right-5 z-[9999] md:animate-in slide-in-from-right-10 fade-in duration-300">
            <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border ${bgColors[type]} min-w-[300px] max-w-md`}>
                {icons[type]}
                <p className="flex-1 text-sm font-medium text-gray-800">{message}</p>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>,
        document.body
    );
};
