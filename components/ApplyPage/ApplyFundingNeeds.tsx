import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyFundingNeeds = () => {
    return (
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
    );
};

export default ApplyFundingNeeds;
