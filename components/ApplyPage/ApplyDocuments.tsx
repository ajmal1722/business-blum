import SectionTitle from "@/components/Ui/SectionTitle";
import { CircleCheckBig } from "lucide-react";
import { documents } from "@/data/applyFormData";

const ApplyDocuments = () => {
    return (
        <div>
            <SectionTitle title="Documents You May Need" />

            <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-8">
                <p className="text-secondary font-semibold leading-relaxed">
                    After submitting this application, lenders may
                    request the following documents to complete your
                    funding process:
                </p>

                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    {documents.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-3"
                        >
                            <CircleCheckBig className="size-4 text-blue-600" />

                            <p className="text-secondary text-sm">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="text-muted mt-4 text-sm italic">
                    Note: Not all lenders require all documents.
                    Specific requirements depend on the loan type
                    and amount.
                </p>
            </div>
        </div>
    );
};

export default ApplyDocuments;
