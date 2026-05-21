import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

interface InfoItem {
    title: string;
    description: string;
}

interface InfoListSectionProps {
    title: string;
    description?: string;
    items: InfoItem[];
    className?: string;
}

const InfoListSection = ({
    title,
    description,
    items,
    className,
}: InfoListSectionProps) => {
    return (
        <section className={className}>
            <Container>
                {/* Heading */}
                <SectionHeading
                    title={title}
                    description={description}
                    className="mb-10 lg:mb-14"
                />

                {/* List */}
                <div className="mx-auto max-w-4xl space-y-7">
                    {items.map((item) => (
                        <InfoCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default InfoListSection;



interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard = ({
    title,
    description,
}: InfoCardProps) => {
    return (
        <div className="rounded-md border border-border bg-surface p-5 transition lg:p-8">
            <h3 className="text-secondary text-base font-bold leading-snug lg:text-xl">
                {title}
            </h3>

            <p className="text-muted mt-4 text-sm leading-relaxed lg:text-base">
                {description}
            </p>
        </div>
    );
};
