import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            className={cn(
                "bg-success text-white px-4 py-2 rounded-sm hover:opacity-90 transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;