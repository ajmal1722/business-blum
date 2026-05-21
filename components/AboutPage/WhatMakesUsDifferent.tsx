import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

import {
    Globe,
    BriefcaseBusiness,
    TrendingUp,
} from "lucide-react";

const differentiators = [
    {
        title: "We're Not a Lender",
        description:
            "We don't lend money. We're an independent platform that works for YOU, not the lenders. This means we have no incentive to push you toward one lender over another — our only goal is finding your best match.",
        icon: Globe,
    },
    {
        title: "Real Business Experience",
        description:
            "Our founders and leadership team aren't just tech people or finance people — they're entrepreneurs who have built and scaled businesses. They've been where you are, and that experience shapes every decision we make.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Technology Meets Human Touch",
        description:
            "Our AI-powered matching algorithm handles the heavy lifting, but real people are always available to help. You're never just a number in our system — you're a business owner with unique needs, and we treat you that way.",
        icon: TrendingUp,
    },
];

const WhatMakesUsDifferent = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="What Makes Us Different"
                    className="mb-14 lg:mb-20"
                />

                {/* Content */}
                <div className="mx-auto max-w-4xl space-y-8 lg:space-y-12">
                    {differentiators.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex flex-col gap-6 sm:flex-row sm:items-start"
                            >
                                {/* Icon */}
                                <div className="flex p-5 w-fit shrink-0 items-center justify-center rounded-2xl bg-success text-white shadow-lg">
                                    <Icon className="size-8" />
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-secondary text-lg font-extrabold lg:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted mt-4 text-base leading-relaxed lg:text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default WhatMakesUsDifferent;