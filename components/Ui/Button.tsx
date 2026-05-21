import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    className,
    href,
    onClick,
}: ButtonProps) => {
    const styles = cn(
        "bg-success text-white inline-flex items-center justify-center rounded-sm px-4 py-2 transition hover:opacity-90",
        className
    );

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

    return (
        <button
            className={styles}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;