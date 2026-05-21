import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const FormField = ({
    label,
    error,
    className,
    ...props
}: FormFieldProps) => {
    return (
        <div className={className}>
            <label className="text-secondary mb-3 block font-bold">
                {label}
            </label>

            <input
                {...props}
                className={`border-border bg-surface placeholder:text-muted focus:border-success focus:ring-success/20 w-full rounded-md border px-6 py-3 text-lg outline-none transition focus:ring-2 ${
                    error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                }`}
            />
            {error && <p className="text-red-500 text-sm mt-1.5 font-medium">{error}</p>}
        </div>
    );
};

export default FormField;