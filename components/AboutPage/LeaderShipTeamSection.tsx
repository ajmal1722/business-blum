import Container from "@/components/Ui/Container";
import SectionHeading from "@/components/Ui/SectionHeading";
import Image from "next/image";
import user1 from "@/assets/images/homepage/user1.jpg";
import user2 from "@/assets/images/homepage/user2.jpg";
import user3 from "@/assets/images/homepage/user2.jpg";
import user4 from "@/assets/images/homepage/user3.jpg";
import { StaticImageData } from "next/image";

const teamMembers = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        description:
            "15 years in fintech. Former VP at Goldman Sachs. MBA from Wharton.",
        image: user1,
    },
    {
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        description:
            "Former lead engineer at Stripe. Built lending platforms for 10+ years.",
        image: user2,
    },
    {
        name: "David Kim",
        role: "Chief Revenue Officer",
        description:
            "20 years building lender partnerships. Former SVP at LendingClub.",
        image: user3,
    },
    {
        name: "Jessica Thompson",
        role: "Head of Customer Success",
        description:
            "Customer advocate with background in small business consulting.",
        image: user4,
    },
];

const LeadershipTeamSection = () => {
    return (
        <section className="py-20 lg:py-28">
            <Container>
                {/* Heading */}
                <SectionHeading
                    title="Leadership Team"
                    description="Meet the team driving Business Blum's mission"
                    className="mb-14 lg:mb-20"
                />

                {/* Team Grid */}
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <LeadershipCard
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            description={member.description}
                            image={member.image}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default LeadershipTeamSection;


interface LeadershipCardProps {
    name: string;
    role: string;
    description: string;
    image: StaticImageData;
}

const LeadershipCard = ({
    name,
    role,
    description,
    image,
}: LeadershipCardProps) => {
    return (
        <div>
            {/* Image Card */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                    src={image}
                    alt={name}
                    className="h-87 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-extrabold text-white">
                        {name}
                    </h3>

                    <p className="mt-1 font-semibold text-success">
                        {role}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="text-muted mt-6 text- leading-relaxed">
                {description}
            </p>
        </div>
    );
};