import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface HeroStat {
    label: string;
}

interface PageHeroProps {
    title: string;
    description?: string;
    stats?: HeroStat[];
    className?: string;
    contentClassName?: string;
}

const PageHero = ({
    title,
    description,
    stats,
    className,
    contentClassName,
}: PageHeroProps) => {
    return (
        <section
            className={cn(
                "relative overflow-hidden bg-[#020817] py-24 md:py-32 mt-12",
                className
            )}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(8,151,106,0.25),transparent_40%)]" />

            <Container className="relative z-10">
                <div
                    className={cn(
                        "mx-auto max-w-5xl",
                        contentClassName
                    )}
                >
                    {/* Heading */}
                    <SectionHeading
                        title={title}
                        description={description}
                        titleClassName="text-white text-4xl md:text-6xl lg:text-7xl"
                        descriptionClassName="text-gray-300 mt-8 max-w-4xl mx-auto leading-relaxed"
                    />

                    {/* Optional Bottom Stats */}
                    {stats && stats.length > 0 && (
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="size-7 text-success" />

                                    <span className="text-base font-semibold text-white md:text-xl">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default PageHero;