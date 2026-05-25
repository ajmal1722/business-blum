import Container from "@/components/Ui/Container";
import Link from "next/link";
import {
    DollarSign,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import navItems from "@/data/navOptions";

const loanOptions = [
    "Personal Loans",
    "Business Loans",
    "Startup Funding",
    "Debt Consolidation",
    "Emergency Funding",
    "Equipment Financing",
];

const companyLinks = [
    "About Us",
    "How It Works",
    "Testimonials",
    "FAQ",
    "Contact Us",
];

const legalLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Security",
];

const Footer = () => {
    return (
        <footer className="bg-primary text-muted border-t border-primary/5">
            <Container>
                {/* Top Footer */}
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <div className="mb-6 flex items-start gap-2 text-white">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success">
                                <DollarSign strokeWidth={2.5} />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold">
                                    Business{" "}
                                    <span className="text-success">
                                        Blum
                                    </span>
                                </h2>

                                <p className="mt-1 text-sm text-muted">
                                    Smart Loan Matching
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm">
                            Smart loan-matching platform connecting
                            borrowers with suitable lenders. We help
                            you check eligibility and find the best
                            loan options for your needs.
                        </p>
                    </div>

                    {/* Loan Options */}
                    <div>
                        <h3 className="mb-4 text-gray-200 font-semibold">
                            Loan Options
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-300">
                            {loanOptions.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="/"
                                        className="transition hover:text-success"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-gray-200 font-semibold">
                            Company
                        </h3>

                        <ul className="space-y-3 text-gray-300 text-sm">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className=" transition hover:text-success"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-gray-200 font-semibold">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-gray-300 text-sm">
                            {/* Phone */}
                            <div className="flex items-start gap-2">
                                <Phone className="mt-1 size-5 text-success" />

                                <div>
                                    <p className=" font-medium">
                                        (800) 555-BLUM
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Mon-Fri 8am-8pm EST
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-2">
                                <Mail className="mt-1 size-5 text-success" />

                                <div>
                                    <p className="text-base">
                                        hello@businessblum.com
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-2">
                                <MapPin className="mt-1 size-5 text-success" />

                                <div>
                                    <p className="text-base">
                                        123 Financial Blvd
                                        <br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Footer */}
            <div className="border-t border-white/10">
                <Container>
                    <div className="flex flex-col items-center justify-between gap-6 py-8 text-center md:flex-row md:text-left">
                        <p className="text-sm text-gray-500">
                            © 2026 Business Blum. All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:gap-6 gap-4 text-sm">
                            {legalLinks.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="text-gray-500 transition hover:text-success"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;