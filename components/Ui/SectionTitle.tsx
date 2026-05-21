
const SectionTitle = ({
    title,
}: {
    title: string;
}) => {
    return (
        <h2 className="text-xl font-extrabold text-primary lg:text-3xl">
            {title}
        </h2>
    );
};

export default SectionTitle;
