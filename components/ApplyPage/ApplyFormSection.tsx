import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";
import { ArrowRight } from "lucide-react";

import ApplyTopBanner from "./ApplyTopBanner";
import ApplyBasicInfo from "./ApplyBasicInfo";
import ApplyOwnerInfo from "./ApplyOwnerInfo";
import ApplyFundingNeeds from "./ApplyFundingNeeds";
import ApplyAuthorization from "./ApplyAuthorization";
import ApplyDocuments from "./ApplyDocuments";
import ApplyTrustBadges from "./ApplyTrustBadges";

const ApplyFormSection = () => {
    return (
        <section className="relative z-20 -mt-16 pb-20 lg:-mt-24 lg:pb-28">
            <Container>
                <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] md:p-10 lg:p-14">
                    <ApplyTopBanner />

                    <ApplyBasicInfo />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyOwnerInfo />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyFundingNeeds />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyAuthorization />

                    {/* Divider */}
                    <div className="my-12 h-px bg-border" />

                    <ApplyDocuments />

                    <ApplyTrustBadges />

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