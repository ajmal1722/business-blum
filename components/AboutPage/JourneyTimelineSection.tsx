import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const milestones = [
    {
        year: "2023",
        title: "Company Founded",
        description:
            "Business Blum launches with mission to revolutionize business lending",
    },
    {
        year: "2023",
        title: "10,000 Businesses",
        description:
            "Helped our first 10,000 businesses secure funding",
    },
    {
        year: "2024",
        title: "National Expansion",
        description:
            "Expanded to all 50 states with 100+ lending partners",
    },
    {
        year: "2024",
        title: "$1B Milestone",
        description:
            "Facilitated over $1 billion in business funding",
    },
    {
        year: "2025",
        title: "Technology Advancement",
        description:
            "Launched AI-powered matching algorithm",
    },
    {
        year: "2026",
        title: "Industry Leader",
        description:
            "50K+ businesses served, 200+ lender partnerships",
    },
];

const JourneyTimelineSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-surface">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Our Journey"
                    description="Milestones that shaped Business Blum"
                    className="mb-16"
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-success/40 lg:block" />

                    <div className="space-y-14 lg:space-y-24">
                        {milestones.map((item, index) => {
                            const isEven = index % 2 === 1;

                            return (
                                <div
                                    key={item.title}
                                    className="relative grid items-center lg:grid-cols-2 lg:gap-16"
                                >
                                    {/* Timeline Icon */}
                                    <div className="absolute left-1/2 top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-success text-white shadow-xl lg:flex">
                                        <Calendar className="size-10" />
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={
                                            isEven
                                                ? "lg:col-start-2 lg:pl-10"
                                                : "lg:pr-10"
                                        }
                                    >
                                        <JourneyCard
                                            year={item.year}
                                            title={item.title}
                                            description={item.description}
                                            alignRight={!isEven}
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

export default JourneyTimelineSection;


interface JourneyCardProps {
    year: string;
    title: string;
    description: string;
    alignRight?: boolean;
}

const JourneyCard = ({
    year,
    title,
    description,
    alignRight,
}: JourneyCardProps) => {
    return (
        <div
            className={cn(
                "rounded-3xl bg-white p-8 shadow-lg lg:p-10",
                alignRight && "lg:text-right"
            )}
        >
            {/* Year */}
            <span className="text-success text-3xl font-extrabold">
                {year}
            </span>

            {/* Title */}
            <h3 className="text-secondary mt-4 text-2xl font-extrabold">
                {title}
            </h3>

            {/* Description */}
            <p className="text-muted mt-3 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};