import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";

import {
    ArrowRight,
    CircleCheckBig,
    Shield,
    Clock3,
} from "lucide-react";

const features = [
    {
        label: "No credit impact",
        icon: CircleCheckBig,
    },
    {
        label: "100% secure",
        icon: Shield,
    },
    {
        label: "3-minute application",
        icon: Clock3,
    },
];

const CTASection = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-32">
            {/* Gradient Glow */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(8,151,106,0.45),transparent_45%)]"
            />

            {/* Decorative Circle */}
            <div
                className="border-background/10 absolute top-20 left-20 flex h-24 w-24 items-center justify-center rounded-full border-4 border-dashed"
            >
                <div
                    className="bg-background/5 h-16 w-16 rounded-full"
                />
            </div>

            {/* Decorative Triangle */}
            <div
                className="
                    border-background/10 absolute right-24 bottom-20 h-0 w-0 border-r-60 border-b-100 
                    border-l-60 border-r-transparent border-l-transparent
        "
            />

            <Container className="relative z-10">
                <div className="mx-auto max-w-5xl text-center">
                    {/* Heading */}
                    <h2
                        className="text-background text-5xl font-extrabold md:text-6xl"
                    >
                        Check Your Loan Options Today
                    </h2>

                    {/* Description */}
                    <p
                        className="text-background/90 mx-auto mt-8 max-w-3xl text-xl leading-relaxed md:text-2xl"
                    >
                        Complete your application in minutes and discover lenders that fit your needs.
                    </p>

                    {/* CTA Button */}
                    <div className="mt-4">
                        <Button
                            className="bg-success hover:bg-success/90 inline-flex items-center gap-3 px-10 py-5 text-xl font-semibold"
                        >
                            Start Application

                            <ArrowRight
                                className="h-6 w-6"
                                strokeWidth={2.5}
                            />
                        </Button>
                    </div>

                    {/* Features */}
                    <div
                        className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12"
                    >
                        {features.map(
                            (feature) => {
                                const Icon =
                                    feature.icon;

                                return (
                                    <div
                                        key={feature.label}
                                        className="text-background/90 flex items-center gap-3 text-lg"
                                    >
                                        <Icon
                                            className="text-success h-6 w-6"
                                            strokeWidth={2.2}
                                        />

                                        <span>
                                            {feature.label}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;