import { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: string[];
    error?: string;
}

const SelectField = ({
    label,
    options,
    error,
    className,
    ...props
}: SelectFieldProps) => {
    return (
        <div className={className}>
            <label className="text-secondary mb-3 block font-bold">
                {label}
            </label>

            <select
                {...props}
                className={`border-border focus:border-success text-secondary h-16 w-full rounded-md border bg-transparent px-6 text-lg outline-none transition ${
                    error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                }`}
            >
                <option value="">Select option</option>

                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1.5 font-medium">{error}</p>}
        </div>
    );
};

export default SelectField;
