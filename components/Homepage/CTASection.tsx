import PageCTA from "../Ui/PageCTA";
import {
    CircleCheckBig,
    Shield,
    Clock3,
} from "lucide-react";

const features = [
    {
        label: "No credit impact",
        icon: CircleCheckBig,
    },
    {
        label: "100% secure",
        icon: Shield,
    },
    {
        label: "3-minute application",
        icon: Clock3,
    },
];

const CTASection = () => {
    return (
        <PageCTA
            title="Check Your Loan Options Today"
            description="Complete your application in minutes and discover lenders that fit your needs."
            buttonText="Start Application"
            features={features}
            link="/apply"
        />
    );
};

export default CTASection;