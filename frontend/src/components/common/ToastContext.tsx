"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Toast } from "@/components/common/Toast";

type ToastType = "success" | "error" | "info";

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
        message: "",
        type: "info",
        isVisible: false,
    });

    const showToast = useCallback((message: string, type: ToastType = "info") => {
        setToast({ message, type, isVisible: true });
        setTimeout(() => {
            setToast((prev) => ({ ...prev, isVisible: false }));
        }, 3000);
    }, []);

    const hideToast = useCallback(() => {
        setToast((prev) => ({ ...prev, isVisible: false }));
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast.isVisible && (
                <Toast message={toast.message} type={toast.type} onClose={hideToast} />
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
