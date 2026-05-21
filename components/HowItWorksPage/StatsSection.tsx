import Container from "@/components/Ui/Container";

const stats = [
    {
        value: "50K+",
        title: "Businesses Funded",
        description: "Since 2023",
    },
    {
        value: "200+",
        title: "Lending Partners",
        description: "Nationwide Network",
    },
    {
        value: "$2.5B+",
        title: "Total Funded",
        description: "And Growing",
    },
    {
        value: "4.8★",
        title: "Customer Rating",
        description: "From 12K+ Reviews",
    },
];

const StatsSection = () => {
    return (
        <section className="relative z-20 -mt-24 pb-20 lg:-mt-36 lg:pb-28">
            <Container>
                <div className="rounded-3xl bg-white p-8 shadow-lg lg:p-12">
                    <div className="grid gap-10 text-center md:grid-cols-2 xl:grid-cols-4">
                        {stats.map((stat) => (
                            <StatCard
                                key={stat.title}
                                value={stat.value}
                                title={stat.title}
                                description={stat.description}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default StatsSection;


interface StatCardProps {
    value: string;
    title: string;
    description: string;
}

const StatCard = ({
    value,
    title,
    description,
}: StatCardProps) => {
    return (
        <div>
            {/* Value */}
            <h3 className="text-success text-5xl font-extrabold md:text-6xl">
                {value}
            </h3>

            {/* Title */}
            <h4 className="text-secondary mt-2 text-xl font-bold">
                {title}
            </h4>

            {/* Description */}
            <p className="text-muted mt-2">
                {description}
            </p>
        </div>
    );
};