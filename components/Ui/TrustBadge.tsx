
const TrustBadge = ({
    icon: Icon,
    label,
}: {
    icon: any;
    label: string;
}) => {
    return (
        <div className="flex items-center gap-3">
            <Icon className="text-success size-6" />

            <span className="text-secondary text-lg font-semibold">
                {label}
            </span>
        </div>
    );
};

export default TrustBadge;
