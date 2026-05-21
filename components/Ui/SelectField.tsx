interface SelectFieldProps {
    label: string;
    options: string[];
}

const SelectField = ({
    label,
    options,
}: SelectFieldProps) => {
    return (
        <div>
            <label className="text-secondary mb-3 block font-bold">
                {label}
            </label>

            <select className="border-border focus:border-success text-secondary h-16 w-full rounded-md border bg-transparent px-6 text-lg outline-none transition">
                <option>Select option</option>

                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
