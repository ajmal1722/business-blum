import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import FeatureCard from "@/components/Ui/FeaturesCard";

import {
    Target,
    Heart,
    Lightbulb,
    Shield,
    Users,
    Zap,
} from "lucide-react";

const coreValues = [
    {
        title: "Transparency",
        description:
            "We believe in complete honesty about our process, partnerships, and how we operate. No hidden agendas, no surprises.",
        icon: Target,
    },
    {
        title: "Customer First",
        description:
            "Every decision we make starts with one question: Is this best for our customers? Your success is our success.",
        icon: Heart,
    },
    {
        title: "Innovation",
        description:
            "We continuously evolve our technology and processes to make business financing simpler, faster, and more accessible.",
        icon: Lightbulb,
    },
    {
        title: "Trust & Security",
        description:
            "We treat your data like our own. Bank-level encryption, strict privacy policies, and zero tolerance for compromise.",
        icon: Shield,
    },
    {
        title: "Inclusivity",
        description:
            "We serve businesses of all sizes, industries, and backgrounds. Everyone deserves access to fair financing.",
        icon: Users,
    },
    {
        title: "Speed & Efficiency",
        description:
            "Time is money in business. We have optimized every step to get you matched with lenders as quickly as possible.",
        icon: Zap,
    },
];

const CoreValues = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>
                <SectionHeading
                    title="Our Core Values"
                    description="These are the principles that guide our actions and decisions"
                    className="mb-14 lg:mb-20"
                />

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {coreValues.map((value) => (
                        <FeatureCard
                            key={value.title}
                            title={value.title}
                            description={value.description}
                            icon={value.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CoreValues;