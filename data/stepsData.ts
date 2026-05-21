import {
    CheckCircle2,
    FileText,
    SearchCheck,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Complete the Application",
        description:
            "Fill out our simple online form with your financial information and loan needs.",
        icon: FileText,
        points: [
            "Takes only 3-5 minutes",
            "No impact on credit score",
            "Secure SSL encryption",
            "Mobile-friendly interface",
        ],
    },
    {
        id: 2,
        title: "Get Matched",
        description:
            "Our system reviews your profile and matches you with suitable lenders based on your eligibility.",
        icon: SearchCheck,
        points: [
            "Instant matching algorithm",
            "Access to 200+ lenders",
            "Pre-qualified offers",
            "Transparent comparison",
        ],
    },
    {
        id: 3,
        title: "Choose Your Best Option",
        description:
            "Review loan offers from matched lenders and proceed with your preferred option.",
        icon: CheckCircle2,
        points: [
            "Compare rates and terms",
            "Direct lender contact",
            "No hidden fees",
            "Expert support available",
        ],
    },
];

export default steps;