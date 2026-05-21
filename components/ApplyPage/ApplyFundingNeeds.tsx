import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyFundingNeeds = ({ errors = {} }: { errors?: Record<string, string> }) => {
    return (
        <div>
            <SectionTitle title="Funding Needs" />

            <div className="mt-8 space-y-7">
                <div className="grid gap-7 lg:grid-cols-2">
                    <SelectField
                        label="Funding Amount Needed *"
                        name="fundingAmount"
                        options={[
                            "$5K - $25K",
                            "$25K - $100K",
                            "$100K - $500K",
                            "$500K+",
                        ]}
                        error={errors.fundingAmount}
                    />

                    <SelectField
                        label="Funding Purpose *"
                        name="fundingPurpose"
                        options={[
                            "Working Capital",
                            "Equipment",
                            "Expansion",
                            "Payroll",
                        ]}
                        error={errors.fundingPurpose}
                    />
                </div>

                <SelectField
                    label="Preferred Funding Type (Optional)"
                    name="preferredFundingType"
                    options={[
                        "No preference - show me all options",
                        "SBA Loan",
                        "Term Loan",
                        "Line of Credit",
                    ]}
                    error={errors.preferredFundingType}
                />
            </div>
        </div>
    );
};

export default ApplyFundingNeeds;
