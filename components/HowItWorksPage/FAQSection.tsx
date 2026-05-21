import InfoListSection from "../Ui/InfoListSection";

const faqs = [
    {
        title:
            "Will checking my eligibility affect my credit score?",
        description:
            "No, our initial eligibility check uses a soft credit inquiry which does not impact your credit score.",
    },
    {
        title:
            "How long does the process take?",
        description:
            "You can complete our application in 3-5 minutes and receive matched lender offers within 24 hours.",
    },
    {
        title:
            "Is there a fee to use Business Blum?",
        description:
            "No, our loan matching service is completely free. You only pay fees to the lender you choose to work with.",
    },
    {
        title:
            "What information do I need to apply?",
        description:
            "You'll need basic business information, estimated revenue, desired loan amount, and your contact details.",
    },
];

const FAQSection = () => {
    return (
        <InfoListSection
            title="Frequently Asked Questions"
            items={faqs}
            className="py-20 lg:py-28"
        />
    );
};

export default FAQSection;