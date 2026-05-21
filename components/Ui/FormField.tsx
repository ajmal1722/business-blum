interface FormFieldProps {
    label: string;
    placeholder: string;
    type?: string;
}

const FormField = ({
    label,
    placeholder,
    type = "text",
}: FormFieldProps) => {
    return (
        <div>
            <label className="text-secondary mb-3 block font-bold">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="border-border bg-surface placeholder:text-muted focus:border-success focus:ring-success/20 w-full rounded-md border px-6 py-3 text-lg outline-none transition focus:ring-2"
            />
        </div>
    );
};

export default FormField;