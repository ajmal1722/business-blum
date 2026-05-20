import Image, {
    StaticImageData,
} from "next/image";

import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

import { Star } from "lucide-react";
import testimonials from "@/data/testimonialsData";

const Testimonials = () => {
    return (
        <section className="py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Success Stories"
                    description="Hear from people we've helped"
                />

                {/* Testimonials */}
                <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {testimonials.map(
                        (testimonial) => (
                            <TestimonialCard
                                key={
                                    testimonial.name
                                }
                                {...testimonial}
                            />
                        )
                    )}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;

interface TestimonialCardProps {
    review: string;
    name: string;
    role: string;
    location: string;
    image: string | StaticImageData;
}

const TestimonialCard = ({
    review,
    name,
    role,
    location,
    image,
}: TestimonialCardProps) => {
    return (
        <article
            className="rounded-lg border border-gray-200 p-8 shadow-md">
            {/* Stars */}
            <div className="mb-8 flex items-center gap-1">
                {Array.from({
                    length: 5,
                }).map((_, index) => (
                    <Star
                        key={index}
                        className="h-5 w-5 fill-yellow-500 text-yellow-500"
                    />
                ))}
            </div>

            {/* Review */}
            <blockquote
                className="text-foreground text-base italic leading-relaxed">
                {review}
            </blockquote>

            {/* Divider */}
            <div className="bg-border my-8 h-px w-full" />

            {/* User */}
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                    className="border-success/20 relative h-16 w-16 overflow-hidden rounded-full border-2"
                >
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info */}
                <div>
                    <h3 className="text-secondary font-bold">
                        {name}
                    </h3>

                    <p className="text-muted mt-1 text-sm">
                        {role}
                    </p>

                    <p className="text-muted text-sm">
                        {location}
                    </p>
                </div>
            </div>
        </article>
    );
};