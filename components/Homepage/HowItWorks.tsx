import Container from "@/components/Ui/Container";
import {
    FileText,
    Search,
    CircleCheckBig,
} from "lucide-react";

const steps = [
    {
        id: "1",
        title: "Complete the Application",
        description:
            "Fill out our simple online form with your financial information and loan needs.",
        icon: FileText,
    },
    {
        id: "2",
        title: "Get Matched",
        description:
            "Our system reviews your profile and matches you with suitable lenders based on your eligibility.",
        icon: Search,
    },
    {
        id: "3",
        title: "Choose Your Best Option",
        description:
            "Review loan offers from matched lenders and proceed with your preferred option.",
        icon: CircleCheckBig,
    },
];

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden bg-surface py-24">
            {/* Grid Background */}
            <div
                className="
          absolute inset-0
          bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
          bg-size-[60px_60px] opacity-50
        "
            />

            <Container className="relative z-10">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-secondary text-5xl font-extrabold md:text-6xl">
                        How It Works
                    </h2>

                    <p className="text-muted mt-6 text-xl md:text-2xl">
                        Get matched with lenders in three simple steps
                    </p>
                </div>

                {/* Cards */}
                <div className="relative mt-20 grid gap-8 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="relative"
                        >
                            {/* Connector Line */}
                            {index !== steps.length - 1 && (
                                <div
                                    className="
                                        bg-success/30
                                        absolute top-1/2 left-full
                                        hidden h-1 w-8 -translate-y-1/2 lg:block
                                    "
                                />
                            )}

                            <StepCard
                                id={step.id}
                                title={step.title}
                                description={step.description}
                                icon={step.icon}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowItWorks;

interface StepCardProps {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const StepCard = ({
    id,
    title,
    description,
    icon: Icon,
}: StepCardProps) => {
    return (
        <article
            className="
                relative overflow-hidden rounded-md border border-border
                bg-background p-8 shadow-sm
                transition-all duration-300 hover:-translate-y-1
            "
        >
            {/* Top Accent Border */}
            <div className="bg-success absolute inset-x-0 top-0 h-1.5" />

            {/* Step Number */}
            <div
                className="
                    bg-success text-background absolute top-8 right-8
                    flex h-10 w-10 items-center justify-center
                    rounded-full text-xl font-bold
                "
            >
                {id}
            </div>

            {/* Icon */}
            <div
                className="
                    bg-success/10 text-success mb-10
                    flex w-fit p-4 items-center justify-center
                    rounded-md
                "
            >
                <Icon
                    className="h-8 w-8"
                    strokeWidth={2.2}
                />
            </div>

            {/* Content */}
            <div className="space-y-5">
                <h3 className="text-secondary text-xl font-bold leading-tight">
                    {title}
                </h3>

                <p className="text-foreground text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </article>
    );
};