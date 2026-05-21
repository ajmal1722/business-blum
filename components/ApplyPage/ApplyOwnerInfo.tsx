import FormField from "@/components/Ui/FormField";
import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyOwnerInfo = ({ errors = {} }: { errors?: Record<string, string> }) => {
    return (
        <div>
            <SectionTitle title="Owner Information" />

            <div className="mt-8 space-y-7">
                <div className="grid gap-7 lg:grid-cols-2">
                    <FormField
                        label="First Name *"
                        name="ownerFirstName"
                        placeholder="John"
                        error={errors.ownerFirstName}
                    />

                    <FormField
                        label="Last Name *"
                        name="ownerLastName"
                        placeholder="Doe"
                        error={errors.ownerLastName}
                    />
                </div>

                <div className="grid gap-7 lg:grid-cols-2">
                    <FormField
                        label="Social Security Number *"
                        name="ssn"
                        placeholder="XXX-XX-XXXX"
                        error={errors.ssn}
                    />

                    <SelectField
                        label="Ownership Percentage *"
                        name="ownershipPercentage"
                        options={[
                            "25%",
                            "50%",
                            "75%",
                            "100%",
                        ]}
                        error={errors.ownershipPercentage}
                    />
                </div>

                <div className="grid gap-7 lg:grid-cols-2">
                    <FormField
                        label="Email Address *"
                        name="ownerEmail"
                        placeholder="john@business.com"
                        type="email"
                        error={errors.ownerEmail}
                    />

                    <FormField
                        label="Phone Number *"
                        name="ownerPhone"
                        placeholder="(555) 123-4567"
                        error={errors.ownerPhone}
                    />
                </div>

                <SelectField
                    label="Estimated Credit Score (Optional)"
                    name="creditScore"
                    options={[
                        "500-550",
                        "550-600",
                        "600-650",
                        "650+",
                        "Prefer not to say",
                    ]}
                    error={errors.creditScore}
                />
            </div>
        </div>
    );
};

export default ApplyOwnerInfo;
