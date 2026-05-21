import InfoListSection from "@/components/Ui/InfoListSection";

const loanFactors = [
    {
        title: "Purpose",
        description:
            "What will you use the funds for? Equipment, expansion, working capital, or real estate?",
    },
    {
        title: "Amount Needed",
        description:
            "How much capital do you need? Consider both immediate needs and potential future expenses.",
    },
    {
        title: "Repayment Timeline",
        description:
            "How quickly can you repay? Short-term loans have higher payments but less total interest.",
    },
    {
        title: "Collateral Available",
        description:
            "Do you have assets to secure the loan? Secured loans typically offer better rates.",
    },
    {
        title: "Business Stage",
        description:
            "Are you a startup, growing business, or established company? This affects your options.",
    },
];

const LoanGuideSection = () => {
    return (
        <InfoListSection
            title="How to Choose the Right Loan"
            description="Consider these factors when selecting your business financing"
            items={loanFactors}
            className="py-20 lg:py-28"
        />
    )
}

export default LoanGuideSection;
