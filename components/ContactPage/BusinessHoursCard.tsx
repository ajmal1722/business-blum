import { Clock3 } from "lucide-react";

const BusinessHoursCard = () => {
    return (
        <div className="rounded-lg border border-success/20 bg-success/15 backdrop-blur-md p-8">
            <Clock3 className="size-11 text-success mb-5" />

            <h3 className="text-secondary text-2xl font-extrabold">
                Business Hours
            </h3>

            <div className="text-muted mt-4 space-y-4">
                <div>
                    <p className="text-secondary font-semibold">
                        Monday - Friday
                    </p>

                    <p className="mt-2">
                        8:00 AM - 8:00 PM EST
                    </p>
                </div>

                <div>
                    <p className="text-secondary font-semibold">
                        Saturday
                    </p>

                    <p className="mt-2">
                        9:00 AM - 5:00 PM EST
                    </p>
                </div>

                <div>
                    <p className="text-secondary font-semibold">
                        Sunday
                    </p>

                    <p className="mt-2">
                        Closed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusinessHoursCard;
