"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";
import { ArrowRight, Loader2 } from "lucide-react";

import ApplyTopBanner from "./ApplyTopBanner";
import ApplyBasicInfo from "./ApplyBasicInfo";
import ApplyOwnerInfo from "./ApplyOwnerInfo";
import ApplyFundingNeeds from "./ApplyFundingNeeds";
import ApplyAuthorization from "./ApplyAuthorization";
import ApplyDocuments from "./ApplyDocuments";
import ApplyTrustBadges from "./ApplyTrustBadges";
import { authorizations } from "@/data/applyFormData";

const ApplyFormSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const newErrors: Record<string, string> = {};

        // Basic Info Validation
        if (!data.legalBusinessName?.trim()) newErrors.legalBusinessName = "Legal Business Name is required";
        if (!data.ein?.trim()) newErrors.ein = "EIN is required";
        if (!data.entityType || data.entityType === "") newErrors.entityType = "Entity Type is required";
        if (!data.businessAddress?.trim()) newErrors.businessAddress = "Business Address is required";
        if (!data.businessPhone?.trim()) newErrors.businessPhone = "Business Phone is required";
        if (!data.industry || data.industry === "") newErrors.industry = "Industry is required";
        if (!data.timeInBusiness || data.timeInBusiness === "") newErrors.timeInBusiness = "Time in Business is required";
        if (!data.monthlyRevenue || data.monthlyRevenue === "") newErrors.monthlyRevenue = "Monthly Revenue is required";

        // Owner Info Validation
        if (!data.ownerFirstName?.trim()) newErrors.ownerFirstName = "First Name is required";
        if (!data.ownerLastName?.trim()) newErrors.ownerLastName = "Last Name is required";
        if (!data.ssn?.trim()) newErrors.ssn = "SSN is required";
        if (!data.ownershipPercentage || data.ownershipPercentage === "") newErrors.ownershipPercentage = "Ownership Percentage is required";
        if (!data.ownerEmail?.trim()) newErrors.ownerEmail = "Email Address is required";
        else if (!/\S+@\S+\.\S+/.test(data.ownerEmail)) newErrors.ownerEmail = "Invalid email format";
        if (!data.ownerPhone?.trim()) newErrors.ownerPhone = "Phone Number is required";

        // Funding Needs Validation
        if (!data.fundingAmount || data.fundingAmount === "") newErrors.fundingAmount = "Funding Amount is required";
        if (!data.fundingPurpose || data.fundingPurpose === "") newErrors.fundingPurpose = "Funding Purpose is required";

        // Authorizations Validation (All must be checked)
        let allAuthChecked = true;
        authorizations.forEach((_, index) => {
            if (!data[`auth_${index}`]) {
                allAuthChecked = false;
            }
        });
        if (!allAuthChecked) {
            newErrors.authorizations = "You must agree to all authorizations to proceed.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            // Scroll to the first error in a smooth way
            const firstErrorField = document.querySelector('[name="' + Object.keys(newErrors)[0] + '"]');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (newErrors.authorizations) {
                // Special case for authorizations
                const authSection = document.querySelector('input[name="auth_0"]');
                if (authSection) authSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            return;
        }

        setErrors({});
        setIsSubmitting(true);

        console.log("Application Submitted Successfully:", data);

        setTimeout(() => {
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();

            toast.success("Application Submitted! A funding specialist will contact you soon.", {
                style: {
                    borderRadius: '12px',
                    background: '#ecfdf5',
                    color: '#047857',
                    border: '1px solid #a7f3d0'
                },
                iconTheme: {
                    primary: '#10b981',
                    secondary: '#ecfdf5',
                },
                duration: 5000,
            });

            // Scroll to top upon success
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const target = e.target;
        const name = target.name;

        if (name && errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }

        // Handle checkbox authorizations specifically for clearing error
        if (name && name.startsWith('auth_') && errors.authorizations) {
            // Need to wait a tick for the form data to update, or just aggressively clear the error
            // so the user can see it went away when they check the box
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.authorizations;
                return newErrors;
            });
        }
    };

    return (
        <section className="relative z-20 -mt-16 pb-20 lg:-mt-24 lg:pb-28">
            <Container>
                <form
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    noValidate
                    className="mx-auto relative overflow-hidden max-w-4xl rounded-3xl border border-border bg-white p-6 shadow-md md:p-10 lg:p-14"
                >
                    {/* Top Accent */}
                    <div className="bg-success absolute inset-x-0 top-0 h-2" />
                    <ApplyTopBanner />

                    <ApplyBasicInfo errors={errors} />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyOwnerInfo errors={errors} />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyFundingNeeds errors={errors} />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyAuthorization errors={errors} />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyDocuments />

                    <ApplyTrustBadges />

                    {/* CTA */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-10 h-16 w-full rounded-xl text-xl font-bold flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                    >
                        {isSubmitting ? (
                            <>
                                Processing Application...
                                <Loader2 className="size-6 animate-spin" />
                            </>
                        ) : (
                            <>
                                Get Matched with 200+ Lenders
                                <ArrowRight className="size-6" strokeWidth={2.2} />
                            </>
                        )}
                    </Button>

                    {/* Footer Text */}
                    <p className="text-muted mt-8 text-center text-sm">
                        By submitting this form, you agree to our Privacy
                        Policy and Terms of Service.
                    </p>
                </form>
            </Container>
        </section>
    );
};

export default ApplyFormSection;