import { CircleHelp, ChevronRight } from "lucide-react";
import Link from "next/link";

const FAQCard = () => {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-lg border border-border">
            <CircleHelp className="size-11 text-success mb-5" />

            <h3 className="text-secondary text-2xl font-extrabold">
                FAQ
            </h3>

            <p className="text-muted mt-5 leading-relaxed">
                Visit our FAQ page for answers to common
                questions about our loan matching service.
            </p>

            <Link
                href="/how-it-works"
                className="text-success/80 hover:text-success mt-6 inline-flex items-center gap-1 font-semibold"
            >
                View FAQ
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </Link>
        </div>
    );
};

export default FAQCard;
