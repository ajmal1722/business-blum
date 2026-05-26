import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";

import {
    Shield,
    ArrowRight,
    CircleCheckBig,
} from "lucide-react";

const cardDetails = [
    {
        title: "No Obligation",
        description: "Free to apply",
    },
    {
        title: "3-Min Application",
        description: "Quick & easy",
    },
    {
        title: "100% Secure",
        description: "Bank-level encryption",
    },
];

const Hero = () => {
    return (
        <section className="py-24 md:py-32 lg:mt-2 mt-6">
            <Container>
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <Button className="bg-secondary flex items-center gap-3 rounded-full px-5 py-3">
                        <Shield className="h-4 w-4" />

                        Trusted by 50,000+ Businesses
                    </Button>

                    {/* Heading */}
                    <h1 className="text-secondary mt-8 text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
                        Get Business Funding
                        <br />

                        <span className="text-success">
                            In 24 Hours
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-6 max-w-4xl text-xl font-medium leading-relaxed text-muted md:text-3xl">
                        Connect with 200+ lenders instantly. No obligation. Quick approval.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row text-lg font-semibold">
                        <Button
                            href="/apply"
                            className="flex items-center justify-center gap-2 px-8 py-4 hover:scale-105 lg:px-14 lg:py-6 text-xl font-bold"
                        >
                            Get Started Now

                            <ArrowRight
                                className="h-5 w-5"
                                strokeWidth={2.5}
                            />
                        </Button>

                        <Button
                            href="how-it-works"
                            className="bg-secondary px-8 py-4 lg:px-16 lg:py-6 text-xl font-bold hover:scale-105"
                        >
                            See How It Works
                        </Button>
                    </div>

                    {/* Feature Cards */}
                    <div className="w-full max-w-6xl mx-auto pt-8 mt-16 border-t border-border">
                        <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 md:flex-row">
                            {cardDetails.map((card) => (
                                <SingleCard
                                    key={card.title}
                                    title={card.title}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

interface SingleCardProps {
    title: string;
    description: string;
}

const SingleCard = ({
    title,
    description,
}: SingleCardProps) => {
    return (
        <div className="flex items-start gap-3">
            <div className="bg-success rounded-full p-3 text-white">
                <CircleCheckBig
                    className="h-6 w-6"
                    strokeWidth={3}
                />
            </div>

            <div className="text-left">
                <h4 className="text-lg font-bold text-secondary">
                    {title}
                </h4>

                <p className="text-muted text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};