import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import WhyChooseImageContainer from "./WhyChoseImageContainer";
import image1 from "@/assets/images/homepage/why-choose-1.jpg";
import image2 from "@/assets/images/homepage/why-choose-2.jpg";
import features from "@/data/featuresData";
import WhyCooseFeaturesCard from "../Ui/FeaturesCard";

import { Star } from "lucide-react";

const stats = [
    {
        value: "50K+",
        label: "Businesses Helped",
    },
    {
        value: "200+",
        label: "Lending Partners",
    },
    {
        value: "4.8",
        label: "Average Rating",
        icon: Star,
    },
];

const WhyChoose = () => {
    return (
        <section className="bg-surface py-28">
            <Container>
                {/* Top Accent Line */}
                <div className="bg-success h-2 w-full rounded-full" />

                {/* Heading */}
                <SectionHeading
                    title="Why Choose Business Blum?"
                    description="We're not a lender — we're your advocate in finding the right one"
                />

                {/* Content Card */}
                <div
                    className="
                        mx-auto mt-20 max-w-4xl rounded-lg border border-border
                        bg-background p-10 md:p-14 shadow-sm
                    "
                >
                    {/* Stats */}
                    <div
                        className="
                            grid gap-10 border-border pb-10 text-center
                            md:grid-cols-3 md:border-b
                        "
                    >
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    className="space-y-3"
                                >
                                    <div
                                        className="
                                            text-success flex items-center justify-center gap-1
                                            text-4xl font-bold
                                        "
                                    >
                                        {stat.value}

                                        {Icon && (
                                            <Icon
                                                className="h-8 w-8 fill-current"
                                                strokeWidth={2.5}
                                            />
                                        )}
                                    </div>

                                    <p className="text-foreground text-base">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div
                        className="
                            text-foreground mt-10 space-y-8 text-base leading-relaxed
                        "
                    >
                        <p>
                            Founded in 2023, Business Blum was created to solve a simple problem: finding the right business loan shouldn&apos;t be overwhelming.
                            We&apos;ve built a platform that cuts through the noise and connects you directly with lenders who want to work with businesses like yours.
                        </p>

                        <p>
                            Unlike traditional banks or direct lenders, we&apos;re a neutral marketplace.
                            We don&apos;t profit from steering you toward one lender over another — we succeed
                            when you find the perfect match for your needs.
                        </p>

                        <p>
                            Our founding team has been in your shoes. We&apos;ve navigated the confusing world
                            of business loans and experienced the anxiety of not knowing if we&apos;d qualify.
                            That&apos;s why we built Business Blum with transparency and simplicity at its core.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="grid gap-6 md:grid-cols-2 mt-10 md:mt-14">
                    <WhyChooseImageContainer
                        image={image1}
                        title="Expert Team"
                        description="Dedicated to your success"
                    />

                    <WhyChooseImageContainer
                        image={image2}
                        title="Cutting-Edge Technology"
                        description="Smart matching algorithms"
                    />
                </div>

                {/* Features Card */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <WhyCooseFeaturesCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyChoose;