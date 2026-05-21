import FormField from "@/components/Ui/FormField";
import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyBasicInfo = () => {
    return (
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
    );
};

export default ApplyBasicInfo;
