"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

import { loanOptions } from "@/data/loanOptions";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const CARD_WIDTH = 320;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;

const BusinessCategories = () => {
    const [currentIndex, setCurrentIndex] =
        useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === loanOptions.length - 4
                ? 0
                : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? loanOptions.length - 4
                : prev - 1
        );
    };

    return (
        <section className="overflow-hidden py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Business Funding Categories"
                    description="We connect you with lenders across all types of business financing"
                />

                {/* Carousel */}
                <div className="relative mt-20">
                    {/* Left Button */}
                    <button
                        onClick={prevSlide}
                        className="
              absolute top-1/2 left-0 z-20
              flex h-12 w-12 -translate-y-1/2 items-center justify-center
              rounded-full border border-border
              bg-background shadow-card
              transition hover:scale-105
            "
                    >
                        <ChevronLeft className="text-secondary h-5 w-5" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={nextSlide}
                        className="
              absolute top-1/2 right-0 z-20
              flex h-12 w-12 -translate-y-1/2 items-center justify-center
              rounded-full border border-border
              bg-background shadow-card
              transition hover:scale-105
            "
                    >
                        <ChevronRight className="text-secondary h-5 w-5" />
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden px-16">
                        <motion.div
                            animate={{
                                x:
                                    -currentIndex *
                                    STEP,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                            className="flex gap-6"
                        >
                            {loanOptions.map(
                                (loan) => (
                                    <LoanCard
                                        key={loan.title}
                                        title={
                                            loan.title
                                        }
                                        description={
                                            loan.description
                                        }
                                        icon={
                                            loan.icon
                                        }
                                    />
                                )
                            )}
                        </motion.div>
                    </div>

                    {/* Indicators */}
                    <div className="mt-10 flex justify-center gap-2">
                        {Array.from({
                            length:
                                loanOptions.length - 3,
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    setCurrentIndex(
                                        index
                                    )
                                }
                                className={`
                  h-1.5 w-1.5 rounded-full transition-all
                  ${currentIndex ===
                                        index
                                        ? "bg-secondary scale-125"
                                        : "bg-border"
                                    }
                `}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BusinessCategories;

interface LoanCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
}

const LoanCard = ({
    title,
    description,
    icon: Icon,
}: LoanCardProps) => {
    return (
        <article
            className="
        relative min-w-[320px]
        rounded-lg border border-border
        bg-background p-8
        shadow-card
      "
        >
            {/* Top Accent */}
            <div className="bg-success absolute inset-x-0 top-0 h-1.5 rounded-lg" />

            {/* Icon */}
            <div
                className="
          bg-success/10 text-success
          mb-8 w-fit p-3 flex items-center justify-center
          rounded-md
        "
            >
                <Icon
                    className="h-6 w-6"
                    strokeWidth={2}
                />
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className="text-secondary text-xl font-bold leading-tight">
                    {title}
                </h3>

                <p className="text-muted text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </article>
    );
};