import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import {
    Clock3,
    ShieldCheck,
    Users,
    LucideIcon,
} from "lucide-react";

const benefits = [
    {
        title: "Save Time",
        description:
            "One application connects you with multiple lenders instead of applying to each one individually.",
        icon: Clock3,
    },
    {
        title: "Stay Secure",
        description:
            "Your data is protected with bank-level encryption and never sold to third parties.",
        icon: ShieldCheck,
    },
    {
        title: "Get Expert Help",
        description:
            "Our team is available to guide you through the process and answer any questions.",
        icon: Users,
    },
];

const WhyBusinessBlum = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Why Use Business Blum?"
                    description="Experience the difference of smart loan matching"
                    className="mb-16 lg:mb-20"
                />

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            title={benefit.title}
                            description={benefit.description}
                            icon={benefit.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyBusinessBlum;


interface BenefitCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const BenefitCard = ({
    title,
    description,
    icon: Icon,
}: BenefitCardProps) => {
    return (
        <div className="rounded-3xl bg-white p-10 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            {/* Icon */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-success/10">
                <Icon className="size-10 text-success" />
            </div>

            {/* Content */}
            <h3 className="text-secondary text-2xl font-extrabold">
                {title}
            </h3>

            <p className="text-muted mt-5 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};