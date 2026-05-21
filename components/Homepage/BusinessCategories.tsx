"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import { loanOptions } from "@/data/loanOptions";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BusinessCategories = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="overflow-hidden py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Business Funding Categories"
                    description="We connect you with lenders across all types of business financing"
                />

                {/* Carousel */}
                <div className="group relative mt-20">
                    {/* Left Button */}
                    <button
                        ref={prevRef}
                        className="
                            absolute top-1/2 left-0 z-20 md:-left-6
                            flex h-12 w-12 -translate-y-1/2 items-center justify-center
                            rounded-full border border-border
                            bg-background shadow-card
                            transition hover:scale-105
                            disabled:cursor-not-allowed disabled:opacity-50
                        "
                    >
                        <ChevronLeft className="text-secondary h-5 w-5" />
                    </button>

                    {/* Right Button */}
                    <button
                        ref={nextRef}
                        className="
                            absolute top-1/2 right-0 z-20 md:-right-6
                            flex h-12 w-12 -translate-y-1/2 items-center justify-center
                            rounded-full border border-border
                            bg-background shadow-card
                            transition hover:scale-105
                            disabled:cursor-not-allowed disabled:opacity-50
                        "
                    >
                        <ChevronRight className="text-secondary h-5 w-5" />
                    </button>

                    {/* Slider */}
                    <div className="overflow-hidden md:px-4">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={24}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass:
                                    "swiper-pagination-bullet !h-2 !w-2 !bg-border !opacity-100",
                                bulletActiveClass:
                                    "swiper-pagination-bullet-active !bg-success",
                            }}
                            onBeforeInit={(swiper) => {
                                // Connect refs before initialization for navigation to work
                                if (
                                    typeof swiper.params.navigation !==
                                    "boolean" &&
                                    swiper.params.navigation
                                ) {
                                    swiper.params.navigation.prevEl =
                                        prevRef.current;

                                    swiper.params.navigation.nextEl =
                                        nextRef.current;
                                }
                            }}
                            className="py-4! pb-14!"
                        >
                            {loanOptions.map((loan, index) => (
                                <SwiperSlide
                                    key={`${loan.title}-${index}`}
                                    className="h-auto"
                                >
                                    <LoanCard
                                        title={loan.title}
                                        description={loan.description}
                                        icon={loan.icon}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                relative h-full w-full overflow-hidden rounded-lg
                border border-border bg-background p-8 shadow-card
            "
        >
            {/* Top Accent */}
            <div className="bg-success absolute inset-x-0 top-0 h-1.5" />

            {/* Icon */}
            <div
                className="
                    bg-success/10 text-success
                    mb-8 flex w-fit items-center justify-center rounded-md p-3
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