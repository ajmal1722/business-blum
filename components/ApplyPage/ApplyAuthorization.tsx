import SectionTitle from "@/components/Ui/SectionTitle";
import { authorizations } from "@/data/applyFormData";

const ApplyAuthorization = ({ errors = {} }: { errors?: Record<string, string> }) => {
    return (
        <div>
            <SectionTitle title="Authorization" />

            <div className="mt-8 space-y-6">
                {authorizations.map((item, index) => (
                    <label
                        key={item.title}
                        className={`flex items-start gap-4 rounded-xl border p-6 bg-surface transition ${
                            errors.authorizations ? "border-red-500 bg-red-50" : "border-border"
                        }`}
                    >
                        <input
                            type="checkbox"
                            name={`auth_${index}`}
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
                {errors.authorizations && (
                    <p className="text-red-500 text-sm font-medium">{errors.authorizations}</p>
                )}
            </div>
        </div>
    );
};

export default ApplyAuthorization;
