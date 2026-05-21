import Container from "@/components/Ui/Container";
import { CircleCheckBig, LucideIcon } from "lucide-react";
import steps from "@/data/stepsData";

const HowItWorks = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-40 hidden h-[calc(100%-12rem)] w-1.5 -translate-x-1/2 bg-success/50 lg:block" />

                    <div className="space-y-14 lg:space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 1;

                            return (
                                <div
                                    key={step.id}
                                    className={`relative grid items-center md:gap-10 lg:grid-cols-2 ${
                                        index === 0 ? "lg:-mt-48" : ""
                                    }`}
                                >
                                    {/* Timeline Number */}
                                    <div className="absolute left-1/2 top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-success text-3xl font-bold text-white shadow-xl lg:flex">
                                        {step.id}
                                    </div>

                                    {/* Left Side */}
                                    <div
                                        className={
                                            isEven
                                                ? "lg:col-start-2 lg:pl-12"
                                                : "lg:pr-12"
                                        }
                                    >
                                        <HowItWorksCard
                                            icon={step.icon}
                                            title={step.title}
                                            description={step.description}
                                            points={step.points}
                                        />
                                    </div>

                                    {/* Empty Column */}
                                    <div
                                        className={
                                            isEven
                                                ? "lg:col-start-1 lg:row-start-1"
                                                : ""
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HowItWorks;


interface HowItWorksCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    points: string[];
}

const HowItWorksCard = ({
    icon: Icon,
    title,
    description,
    points,
}: HowItWorksCardProps) => {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-md lg:p-12">
            {/* Icon */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-lg bg-success/10">
                <Icon className="size-10 text-success" />
            </div>

            {/* Content */}
            <h3 className="text-secondary text-3xl font-extrabold">
                {title}
            </h3>

            <p className="text-muted mt-6 text-xl leading-relaxed">
                {description}
            </p>

            {/* Points */}
            <ul className="mt-8 space-y-5">
                {points.map((point) => (
                    <li
                        key={point}
                        className="flex items-center gap-4"
                    >
                        <CircleCheckBig className="size-6 text-success" />

                        <span className="text-muted text-lg">
                            {point}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};