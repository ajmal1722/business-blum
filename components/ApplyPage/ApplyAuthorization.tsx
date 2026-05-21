import SectionTitle from "@/components/Ui/SectionTitle";
import { authorizations } from "@/data/applyFormData";

const ApplyAuthorization = () => {
    return (
        <div>
            <SectionTitle title="Authorization" />

            <div className="mt-8 space-y-6">
                {authorizations.map((item) => (
                    <label
                        key={item.title}
                        className="flex items-start gap-4 rounded-xl border border-border p-6 bg-surface"
                    >
                        <input
                            type="checkbox"
                            className="mt-1 size-5 accent-green-600"
                        />

                        <p className="text-muted text-base leading-relaxed">
                            <span className="text-secondary font-bold">
                                {item.title}
                            </span>{" "}
                            {item.description}
                        </p>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ApplyAuthorization;
