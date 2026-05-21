import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

const faqs = [
    {
        question:
            "Will checking my eligibility affect my credit score?",
        answer:
            "No, our initial eligibility check uses a soft credit inquiry which does not impact your credit score.",
    },
    {
        question:
            "How long does the process take?",
        answer:
            "You can complete our application in 3-5 minutes and receive matched lender offers within 24 hours.",
    },
    {
        question:
            "Is there a fee to use Business Blum?",
        answer:
            "No, our loan matching service is completely free. You only pay fees to the lender you choose to work with.",
    },
    {
        question:
            "What information do I need to apply?",
        answer:
            "You'll need basic business information, estimated revenue, desired loan amount, and your contact details.",
    },
];

const FAQSection = () => {
    return (
        <section className="py-20 lg:py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Frequently Asked Questions"
                    className="mb-10 lg:mb-14"
                />

                {/* FAQ List */}
                <div className="mx-auto max-w-4xl space-y-7">
                    {faqs.map((faq) => (
                        <FAQCard
                            key={faq.question}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FAQSection;



interface FAQCardProps {
    question: string;
    answer: string;
}

const FAQCard = ({
    question,
    answer,
}: FAQCardProps) => {
    return (
        <div className="rounded-md border border-border bg-surface p-5 transition lg:p-8">
            <h3 className="text-secondary text-base font-bold leading-snug lg:text-xl">
                {question}
            </h3>

            <p className="text-muted mt-4 text-sm leading-relaxed lg:text-base">
                {answer}
            </p>
        </div>
    );
};