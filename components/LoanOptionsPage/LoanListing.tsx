import Container from "@/components/Ui/Container";
import { loanOptions } from "@/data/loanOptions";
import { CircleCheckBig, LucideIcon } from "lucide-react";

const LoanListing = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {loanOptions.map((loan) => (
                        <LoanCard
                            key={loan.title}
                            title={loan.title}
                            description={loan.description}
                            loanRange={loan.loanRange}
                            term={loan.term}
                            features={loan.features}
                            icon={loan.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default LoanListing;






interface LoanOption {
    title: string;
    description: string;
    loanRange: string;
    term: string;
    features: string[];
    icon: LucideIcon;
}

const LoanCard = ({
    title,
    description,
    loanRange,
    term,
    features,
    icon: Icon,
}: LoanOption) => {
    return (
        <div className="overflow-hidden rounded-lg shadow-lg transition hover:shadow-2xl">
            {/* Top Border */}
            <div className="h-2 bg-success" />

            <div className="p-7">
                {/* Icon */}
                <div className="mb-5 p-4 w-fit flex items-center justify-center rounded-md bg-success/10">
                    <Icon className="size-7 text-success" />
                </div>

                {/* Content */}
                <h3 className="text-secondary text-xl font-extrabold">
                    {title}
                </h3>

                <p className="text-muted text-sm mt-3 leading-relaxed">
                    {description}
                </p>

                {/* Loan Details */}
                <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between gap-4">
                        <span className="text-muted">
                            Loan Range:
                        </span>

                        <span className="text-success font-bold">
                            {loanRange}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <span className="text-muted">
                            Term:
                        </span>

                        <span className="text-secondary font-bold">
                            {term}
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="bg-border my-4 h-px w-full" />

                {/* Features */}
                <ul className="space-y-3">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-center gap-4"
                        >
                            <CircleCheckBig className="size-4 text-success" />

                            <span className="text-muted text-sm">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};