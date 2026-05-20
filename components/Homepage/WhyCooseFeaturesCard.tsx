
interface WhyCooseFeaturesCardProps {
    icon: any;
    title: string;
    description: string;
}

const WhyCooseFeaturesCard = ({ icon: Icon, title, description }: WhyCooseFeaturesCardProps) => {
    return (
        <div
            className="border-border group relative overflow-hidden rounded-lg border bg-background p-8 shadow-sm hover:shadow-lg"
        >
            <div className="mb-8 flex items-start justify-between">
                <div
                    className="bg-success/10 text-success flex size-14 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-110"
                >
                    <Icon
                        className="size-7"
                        strokeWidth={2}
                    />
                </div>
            </div>

            <div className="space-y-3">
                <h3 className="text-secondary font-bold text-lg">
                    {title}
                </h3>

                <p className="text-foreground text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default WhyCooseFeaturesCard;