import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    centered?: boolean;
}

const SectionHeading = ({
    title,
    description,
    className,
    titleClassName,
    descriptionClassName,
    centered = true,
}: SectionHeadingProps) => {
    return (
        <div
            className={cn(
                "max-w-6xl",
                centered && "mx-auto text-center",
                className
            )}
        >
            <h2
                className={cn(
                    "text-secondary text-5xl font-extrabold md:text-6xl",
                    titleClassName
                )}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={cn(
                        "text-muted mt-6 text-xl md:text-2xl",
                        descriptionClassName
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;