import Container from "@/components/Ui/Container";
import FormField from "@/components/Ui/FormField";
import Button from "@/components/Ui/Button";
import {
    ArrowRight,
    CircleCheckBig,
    Clock3,
    Shield,
} from "lucide-react";

import {
    authorizations,
    documents,
    fundingOptions,
} from "@/data/applyFormData";

const ApplyFormSection = () => {
    return (
        <section className="relative z-20 -mt-16 pb-20 lg:-mt-24 lg:pb-28">
            <Container>
                <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] md:p-10 lg:p-14">
                    {/* Top Funding Banner */}
                    <div className="rounded-xl bg-success p-8 text-center text-white lg:p-10">
                        <h2 className="text-xl font-extrabold lg:text-3xl">
                            Access $5K - $10M in Business Funding
                        </h2>

                        <p className="mt-4 text-base text-white/90 lg:text-lg">
                            From Merchant Cash Advances to SBA Loans
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {fundingOptions.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-xl bg-white/10 p-5 backdrop-blur-sm"
                                >
                                    <p className="text-sm text-white/80">
                                        {item.title}
                                    </p>

                                    <h3 className="mt-2 text-xl font-extrabold">
                                        {item.credit}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Basic Business Information */}
                    <div className="mt-14">
                        <SectionTitle title="Basic Business Information" />

                        <div className="mt-8 space-y-7">
                            <FormField
                                label="Legal Business Name *"
                                placeholder="Your Business LLC"
                            />

                            <div className="grid gap-7 lg:grid-cols-2">
                                <FormField
                                    label="EIN (Employer ID Number) *"
                                    placeholder="XX-XXXXXXX"
                                />

                                <SelectField
                                    label="Business Entity Type *"
                                    options={[
                                        "LLC",
                                        "Corporation",
                                        "Sole Proprietorship",
                                        "Partnership",
                                    ]}
                                />
                            </div>

                            <FormField
                                label="Business Address *"
                                placeholder="123 Main St, Suite 100, City, State ZIP"
                            />

                            <div className="grid gap-7 lg:grid-cols-2">
                                <FormField
                                    label="Business Phone *"
                                    placeholder="(555) 123-4567"
                                />

                                <FormField
                                    label="Business Website or Social Media"
                                    placeholder="www.yourwebsite.com"
                                />
                            </div>

                            <div className="grid gap-7 lg:grid-cols-2">
                                <SelectField
                                    label="Industry *"
                                    options={[
                                        "Retail",
                                        "Construction",
                                        "Healthcare",
                                        "Restaurant",
                                    ]}
                                />

                                <SelectField
                                    label="Time in Business *"
                                    options={[
                                        "0-6 Months",
                                        "6-12 Months",
                                        "1-2 Years",
                                        "3+ Years",
                                    ]}
                                />
                            </div>

                            <SelectField
                                label="Average Monthly Revenue *"
                                options={[
                                    "$5K - $10K",
                                    "$10K - $50K",
                                    "$50K - $100K",
                                    "$100K+",
                                ]}
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    {/* Owner Information */}
                    <div>
                        <SectionTitle title="Owner Information" />

                        <div className="mt-8 space-y-7">
                            <div className="grid gap-7 lg:grid-cols-2">
                                <FormField
                                    label="First Name *"
                                    placeholder="John"
                                />

                                <FormField
                                    label="Last Name *"
                                    placeholder="Doe"
                                />
                            </div>

                            <div className="grid gap-7 lg:grid-cols-2">
                                <FormField
                                    label="Social Security Number *"
                                    placeholder="XXX-XX-XXXX"
                                />

                                <SelectField
                                    label="Ownership Percentage *"
                                    options={[
                                        "25%",
                                        "50%",
                                        "75%",
                                        "100%",
                                    ]}
                                />
                            </div>

                            <div className="grid gap-7 lg:grid-cols-2">
                                <FormField
                                    label="Email Address *"
                                    placeholder="john@business.com"
                                    type="email"
                                />

                                <FormField
                                    label="Phone Number *"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <SelectField
                                label="Estimated Credit Score (Optional)"
                                options={[
                                    "500-550",
                                    "550-600",
                                    "600-650",
                                    "650+",
                                    "Prefer not to say",
                                ]}
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    {/* Funding Needs */}
                    <div>
                        <SectionTitle title="Funding Needs" />

                        <div className="mt-8 space-y-7">
                            <div className="grid gap-7 lg:grid-cols-2">
                                <SelectField
                                    label="Funding Amount Needed *"
                                    options={[
                                        "$5K - $25K",
                                        "$25K - $100K",
                                        "$100K - $500K",
                                        "$500K+",
                                    ]}
                                />

                                <SelectField
                                    label="Funding Purpose *"
                                    options={[
                                        "Working Capital",
                                        "Equipment",
                                        "Expansion",
                                        "Payroll",
                                    ]}
                                />
                            </div>

                            <SelectField
                                label="Preferred Funding Type (Optional)"
                                options={[
                                    "No preference - show me all options",
                                    "SBA Loan",
                                    "Term Loan",
                                    "Line of Credit",
                                ]}
                            />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    {/* Authorization */}
                    <div>
                        <SectionTitle title="Authorization" />

                        <div className="mt-8 space-y-6">
                            {authorizations.map((item) => (
                                <label
                                    key={item.title}
                                    className="flex items-start gap-4 rounded-xl border border-border p-6 bg-surface"
                                >
                                    <input
                                        type="checkbox"
                                        className="mt-1 size-5 accent-green-600"
                                    />

                                    <p className="text-muted text-base leading-relaxed">
                                        <span className="text-secondary font-bold">
                                            {item.title}
                                        </span>{" "}
                                        {item.description}
                                    </p>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    {/* Documents */}
                    <div>
                        <SectionTitle title="Documents You May Need" />

                        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-8">
                            <p className="text-secondary font-semibold leading-relaxed">
                                After submitting this application, lenders may
                                request the following documents to complete your
                                funding process:
                            </p>

                            <div className="mt-4 grid gap-4 lg:grid-cols-2">
                                {documents.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CircleCheckBig className="size-4 text-blue-600" />

                                        <p className="text-secondary text-sm">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-muted mt-4 text-sm italic">
                                Note: Not all lenders require all documents.
                                Specific requirements depend on the loan type
                                and amount.
                            </p>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-8">
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            <TrustBadge
                                icon={CircleCheckBig}
                                label="Soft credit inquiry only"
                            />

                            <TrustBadge
                                icon={Shield}
                                label="Bank-level encryption"
                            />

                            <TrustBadge
                                icon={Clock3}
                                label="Funding under 48 hours"
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <Button className="mt-10 h-16 w-full rounded-xl text-xl font-bold flex items-center justify-center gap-1">
                        Get Matched with 200+ Lenders
                        <ArrowRight className="ml-2 size-6" strokeWidth={2.2} />
                    </Button>

                    {/* Footer Text */}
                    <p className="text-muted mt-8 text-center text-sm">
                        By submitting this form, you agree to our Privacy
                        Policy and Terms of Service.
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ApplyFormSection;

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

const SectionTitle = ({
    title,
}: {
    title: string;
}) => {
    return (
        <h2 className="text-xl font-extrabold text-primary lg:text-3xl">
            {title}
        </h2>
    );
};

interface SelectFieldProps {
    label: string;
    options: string[];
}

const SelectField = ({
    label,
    options,
}: SelectFieldProps) => {
    return (
        <div>
            <label className="text-secondary mb-3 block font-bold">
                {label}
            </label>

            <select className="border-border focus:border-success text-secondary h-16 w-full rounded-md border bg-transparent px-6 text-lg outline-none transition">
                <option>Select option</option>

                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

const TrustBadge = ({
    icon: Icon,
    label,
}: {
    icon: any;
    label: string;
}) => {
    return (
        <div className="flex items-center gap-3">
            <Icon className="text-success size-6" />

            <span className="text-secondary text-lg font-semibold">
                {label}
            </span>
        </div>
    );
};