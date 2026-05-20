import {
    Rocket,
    Landmark,
    BadgeDollarSign,
    Wallet,
    CreditCard,
    Wrench,
    Truck,
    TrendingUp,
    FileText,
    Banknote,
    Store,
    ShoppingCart,
    Utensils,
    Stethoscope,
    Building2,
    Hammer,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface LoanOption {
    title: string;
    description: string;
    loanRange: string;
    term: string;
    features: string[];
    icon: LucideIcon;
}

export const loanOptions: LoanOption[] = [
    {
        title: "Startup Loans",
        description:
            "Launch your business with funding tailored for new ventures.",
        loanRange: "$10K - $250K",
        term: "1-5 years",
        features: [
            "Flexible terms",
            "Business plan support",
            "Quick approval",
        ],
        icon: Rocket,
    },
    {
        title: "SBA Loans",
        description:
            "Government-backed loans with competitive rates and terms.",
        loanRange: "$50K - $5M",
        term: "5-25 years",
        features: [
            "Low interest rates",
            "Long repayment terms",
            "Government backed",
        ],
        icon: Landmark,
    },
    {
        title: "Term Loans",
        description:
            "Fixed-rate financing with predictable monthly payments.",
        loanRange: "$25K - $500K",
        term: "1-7 years",
        features: [
            "Fixed rates",
            "Predictable payments",
            "Fast funding",
        ],
        icon: BadgeDollarSign,
    },
    {
        title: "Working Capital Loans",
        description:
            "Cover day-to-day operational expenses and cash flow needs.",
        loanRange: "$10K - $250K",
        term: "3 months - 3 years",
        features: [
            "Fast access",
            "Flexible use",
            "Short-term options",
        ],
        icon: Wallet,
    },
    {
        title: "Business Line of Credit",
        description:
            "Flexible access to funds when you need them.",
        loanRange: "$10K - $500K",
        term: "Revolving",
        features: [
            "Pay as you use",
            "Reusable credit",
            "Emergency ready",
        ],
        icon: CreditCard,
    },
    {
        title: "Equipment Financing",
        description:
            "Finance machinery, technology, and business equipment.",
        loanRange: "$10K - $5M",
        term: "2-10 years",
        features: [
            "100% financing",
            "Tax benefits",
            "Equipment as collateral",
        ],
        icon: Wrench,
    },
    {
        title: "Commercial Vehicle Financing",
        description:
            "Fund trucks, vans, and fleet vehicles for your business.",
        loanRange: "$15K - $500K",
        term: "2-7 years",
        features: [
            "Competitive rates",
            "Fleet discounts",
            "Vehicle as collateral",
        ],
        icon: Truck,
    },
    {
        title: "Revenue-Based Financing",
        description:
            "Repay based on your monthly revenue performance.",
        loanRange: "$10K - $500K",
        term: "3-18 months",
        features: [
            "No fixed payments",
            "Revenue aligned",
            "Fast approval",
        ],
        icon: TrendingUp,
    },
    {
        title: "Invoice Financing",
        description:
            "Get paid immediately on outstanding invoices.",
        loanRange: "$10K - $1M",
        term: "30-90 days",
        features: [
            "Improve cash flow",
            "Use invoices as collateral",
            "Quick funding",
        ],
        icon: FileText,
    },
    {
        title: "Merchant Cash Advance",
        description:
            "Quick funding based on future credit card sales.",
        loanRange: "$5K - $250K",
        term: "3-12 months",
        features: [
            "Fast approval",
            "No collateral",
            "Daily repayment",
        ],
        icon: Banknote,
    },
    {
        title: "Franchise Financing",
        description:
            "Specialized funding for franchise businesses.",
        loanRange: "$50K - $5M",
        term: "5-20 years",
        features: [
            "Franchise expertise",
            "Favorable terms",
            "Established brands",
        ],
        icon: Store,
    },
    {
        title: "E-commerce Funding",
        description:
            "Capital for online retailers and digital businesses.",
        loanRange: "$10K - $500K",
        term: "3 months - 3 years",
        features: [
            "Platform integration",
            "Revenue based",
            "Growth focused",
        ],
        icon: ShoppingCart,
    },
    {
        title: "Restaurant Financing",
        description:
            "Funding tailored to restaurants and food services.",
        loanRange: "$25K - $750K",
        term: "1-10 years",
        features: [
            "Equipment & renovation",
            "Industry specialists",
            "Seasonal flexibility",
        ],
        icon: Utensils,
    },
    {
        title: "Medical Practice Funding",
        description:
            "Healthcare-specific financing for medical professionals.",
        loanRange: "$50K - $2M",
        term: "2-15 years",
        features: [
            "Equipment financing",
            "Practice expansion",
            "Healthcare expertise",
        ],
        icon: Stethoscope,
    },
    {
        title: "Commercial Real Estate Loans",
        description:
            "Purchase or refinance commercial property.",
        loanRange: "$100K - $10M",
        term: "5-30 years",
        features: [
            "Property ownership",
            "Low down payments",
            "Tax advantages",
        ],
        icon: Building2,
    },
    {
        title: "Construction Loans",
        description:
            "Fund new construction or renovation projects.",
        loanRange: "$100K - $5M",
        term: "6-24 months",
        features: [
            "Progress-based funding",
            "Renovation support",
            "Convert to permanent",
        ],
        icon: Hammer,
    },
];