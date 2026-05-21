import Container from "@/components/Ui/Container";
import { Shield } from "lucide-react";
import bgImage from "@/assets/images/apply/bg-image.jpg";

const ApplyHeroSection = () => {
    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-36 lg:pb-32">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        `url('${bgImage.src}')`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary/85" />

            {/* Gradient Glow */}

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="border-white/15 bg-secondary inline-flex items-center gap-2 rounded-md border px-3 py-2 backdrop-blur-sm">
                        <Shield className="size-4 text-success" />

                        <span className="text-sm font-semibold text-white">
                            Secure Application
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-none text-white md:text-6xl">
                        Get Funded in Under 48 Hours
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-200 md:text-2xl">
                        Complete our secure application and get matched
                        with 200+ lenders
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ApplyHeroSection;