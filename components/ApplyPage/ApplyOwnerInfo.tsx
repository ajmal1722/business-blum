import FormField from "@/components/Ui/FormField";
import SelectField from "@/components/Ui/SelectField";
import SectionTitle from "@/components/Ui/SectionTitle";

const ApplyOwnerInfo = () => {
    return (
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
    );
};

export default ApplyOwnerInfo;
