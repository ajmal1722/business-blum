import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;

    // Button Types
    type?: "button" | "submit" | "reset";

    // Optional States
    disabled?: boolean;
}

const Button = ({
    children,
    className,
    href,
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) => {
    const styles = cn(
        "bg-success text-white inline-flex items-center justify-center rounded-sm px-4 py-2 transition hover:opacity-90 disabled:pointer-events-none disabled:opacity-50",
        className
    );

    // Link Button
    if (href) {
        return (
            <Link
                href={href}
                className={styles}
                onClick={onClick}
            >
                {children}
            </Link>
        );
    }

    // Native Button
    return (
        <button
            type={type}
            className={styles}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;