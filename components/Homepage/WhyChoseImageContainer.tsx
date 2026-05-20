import Image, {
    StaticImageData,
} from "next/image";

interface WhyChooseImageContainerProps {
    image: string | StaticImageData;
    title: string;
    description: string;
}

const WhyChooseImageContainer = ({
    image,
    title,
    description,
}: WhyChooseImageContainerProps) => {
    return (
        <div
            className="relative overflow-hidden rounded-lg"
        >
            <Image
                src={image}
                alt={title}
                className="h-[280px] w-full object-cover"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/50 to-transparent"
            />

            {/* Content */}
            <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-background text-xl font-bold">
                    {title}
                </h3>

                <p className="text-background/90 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyChooseImageContainer;