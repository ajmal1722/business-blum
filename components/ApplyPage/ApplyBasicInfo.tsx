import FormField from "@/components/Ui/FormField";
import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyBasicInfo = ({ errors = {} }: { errors?: Record<string, string> }) => {
    return (
        <div className="mt-14">
            <SectionTitle title="Basic Business Information" />

            <div className="mt-8 space-y-7">
                <FormField
                    label="Legal Business Name *"
                    name="legalBusinessName"
                    placeholder="Your Business LLC"
                    error={errors.legalBusinessName}
                />

                <div className="grid gap-7 lg:grid-cols-2">
                    <FormField
                        label="EIN (Employer ID Number) *"
                        name="ein"
                        placeholder="XX-XXXXXXX"
                        error={errors.ein}
                    />

                    <SelectField
                        label="Business Entity Type *"
                        name="entityType"
                        options={[
                            "LLC",
                            "Corporation",
                            "Sole Proprietorship",
                            "Partnership",
                        ]}
                        error={errors.entityType}
                    />
                </div>

                <FormField
                    label="Business Address *"
                    name="businessAddress"
                    placeholder="123 Main St, Suite 100, City, State ZIP"
                    error={errors.businessAddress}
                />

                <div className="grid gap-7 lg:grid-cols-2">
                    <FormField
                        label="Business Phone *"
                        name="businessPhone"
                        placeholder="(555) 123-4567"
                        error={errors.businessPhone}
                    />

                    <FormField
                        label="Business Website or Social Media"
                        name="businessWebsite"
                        placeholder="www.yourwebsite.com"
                        error={errors.businessWebsite}
                    />
                </div>

                <div className="grid gap-7 lg:grid-cols-2">
                    <SelectField
                        label="Industry *"
                        name="industry"
                        options={[
                            "Retail",
                            "Construction",
                            "Healthcare",
                            "Restaurant",
                        ]}
                        error={errors.industry}
                    />

                    <SelectField
                        label="Time in Business *"
                        name="timeInBusiness"
                        options={[
                            "0-6 Months",
                            "6-12 Months",
                            "1-2 Years",
                            "3+ Years",
                        ]}
                        error={errors.timeInBusiness}
                    />
                </div>

                <SelectField
                    label="Average Monthly Revenue *"
                    name="monthlyRevenue"
                    options={[
                        "$5K - $10K",
                        "$10K - $50K",
                        "$50K - $100K",
                        "$100K+",
                    ]}
                    error={errors.monthlyRevenue}
                />
            </div>
        </div>
    );
};

export default ApplyBasicInfo;
