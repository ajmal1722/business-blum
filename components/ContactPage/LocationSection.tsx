import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";

import { MapPin } from "lucide-react";

const locations = [
    {
        city: "New York (HQ)",
        address1: "123 Financial Blvd",
        address2: "New York, NY 10001",
        hours: "Mon-Fri: 8am-8pm EST",
    },
    {
        city: "Los Angeles",
        address1: "456 Business Ave",
        address2: "Los Angeles, CA 90001",
        hours: "Mon-Fri: 8am-8pm PST",
    },
    {
        city: "Chicago",
        address1: "789 Commerce St",
        address2: "Chicago, IL 60601",
        hours: "Mon-Fri: 8am-8pm CST",
    },
];

const LocationsSection = () => {
    return (
        <section className="bg-surface py-20 lg:py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Our Locations"
                    description="Visit us at one of our offices nationwide"
                    className="mb-14 lg:mb-16"
                />

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {locations.map((location) => (
                        <LocationCard
                            key={location.city}
                            city={location.city}
                            address1={location.address1}
                            address2={location.address2}
                            hours={location.hours}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default LocationsSection;

interface LocationCardProps {
    city: string;
    address1: string;
    address2: string;
    hours: string;
}

const LocationCard = ({
    city,
    address1,
    address2,
    hours,
}: LocationCardProps) => {
    return (
        <div className="rounded-xl bg-white p-8 shadow-lg border border-border">
            {/* Icon */}
            <MapPin className="size-9 text-success mb-4" />

            {/* City */}
            <h3 className="text-secondary text-2xl font-bold">
                {city}
            </h3>

            {/* Address */}
            <div className="text-secondary mt-4 space-y-2 text-l">
                <p>{address1}</p>
                <p>{address2}</p>
            </div>

            {/* Divider */}
            <div className="bg-border my-5 h-px w-full" />

            {/* Hours */}
            <p className="text-secondary">
                {hours}
            </p>
        </div>
    );
};