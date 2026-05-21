import TrustBadge from "@/components/Ui/TrustBadge";
import { CircleCheckBig, Clock3, Shield } from "lucide-react";

const ApplyTrustBadges = () => {
    return (
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
    );
};

export default ApplyTrustBadges;
