"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";

import {
    DollarSign,
    Menu,
    X,
} from "lucide-react";

interface NavItems {
    label: string;
    href: string;
}

const navItems: NavItems[] = [
    {
        label: "How It Works",
        href: "/how-it-works",
    },
    {
        label: "Loan Options",
        href: "/loan-options",
    },
    {
        label: "Success Stories",
        href: "/success-stories",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
];

const Header = () => {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full shadow-sm">
            <Container className="flex items-center justify-between py-4">
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Homepage"
                    className="flex items-center gap-2"
                >
                    <div className="bg-success rounded-md p-3 text-white">
                        <DollarSign
                            className="h-6 w-6"
                            strokeWidth={2.5}
                        />
                    </div>

                    <div>
                        <h3 className="text-secondary text-xl font-bold">
                            Business{" "}
                            <span className="text-success">
                                Blum
                            </span>
                        </h3>

                        <p className="text-muted text-sm">
                            Smart Loan matching
                        </p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav
                    aria-label="Main navigation"
                    className="hidden lg:block"
                >
                    <ul className="flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive =
                                pathname === item.href;

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`
                      relative pb-2 transition-colors
                      ${isActive
                                                ? "text-success"
                                                : "hover:text-success"
                                            }
                    `}
                                    >
                                        {item.label}

                                        {/* Active Dot */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-dot"
                                                className="bg-success absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                }}
                                            />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button>
                        Apply Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle menu"
                    className="lg:hidden"
                    onClick={() =>
                        setMobileMenuOpen(
                            !mobileMenuOpen
                        )
                    }
                >
                    <motion.div
                        animate={{
                            rotate: mobileMenuOpen
                                ? 180
                                : 0,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </motion.div>
                </button>
            </Container>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="overflow-hidden lg:hidden"
                    >
                        <Container className="py-6">
                            <nav aria-label="Mobile navigation">
                                <ul className="flex flex-col gap-5">
                                    {navItems.map((item) => {
                                        const isActive =
                                            pathname === item.href;

                                        return (
                                            <li key={item.href}>
                                                <Link
                                                    href={item.href}
                                                    className={`
                            flex items-center gap-2 transition-colors
                            ${isActive
                                                            ? "text-success"
                                                            : "hover:text-success"
                                                        }
                          `}
                                                    onClick={() =>
                                                        setMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                >
                                                    {item.label}

                                                    {isActive && (
                                                        <span className="bg-success h-2 w-2 rounded-full" />
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <Button className="mt-6 w-full">
                                    Apply Now
                                </Button>
                            </nav>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;