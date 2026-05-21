import Container from "@/components/Ui/Container";

import {
    Phone,
    Mail,
    MessageCircle,
} from "lucide-react";

const contactMethods = [
    {
        title: "Phone",
        value: "(800) 555-BLUM",
        description: "Mon-Fri 8am-8pm EST",
        icon: Phone,
        iconBg: "bg-success/10",
    },
    {
        title: "Email",
        value: "hello@businessblum.com",
        description: "We respond within 24 hours",
        icon: Mail,
        iconBg: "bg-primary/5",
    },
    {
        title: "Live Chat",
        value: "Available Now",
        description: "Average response: 2 minutes",
        icon: MessageCircle,
        iconBg: "bg-success/10",
    },
];

const ContactSection = () => {
    return (
        <section className="relative z-20 -mt-32 pb-20 lg:-mt-40 lg:pb-28">
            <Container>
                <div className="grid gap-8 lg:grid-cols-3">
                    {contactMethods.map((item) => {
                        const Icon = item.icon;

                        return (
                            <ContactCard
                                key={item.title}
                                title={item.title}
                                value={item.value}
                                description={item.description}
                                icon={
                                    <Icon className="size-8 text-success" />
                                }
                                iconBg={item.iconBg}
                            />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;


interface ContactCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
    iconBg?: string;
}

const ContactCard = ({
    title,
    value,
    description,
    icon,
    iconBg,
}: ContactCardProps) => {
    return (
        <div className="rounded-3xl bg-white p-10 shadow-md">
            {/* Icon */}
            <div
                className={`flex w-fit p-5 items-center justify-center rounded-lg ${iconBg}`}
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-secondary mt-5 text-2xl font-bold">
                {title}
            </h3>

            {/* Value */}
            <p className="text-secondary mt-3 text-lg font-semibold">
                {value}
            </p>

            {/* Description */}
            <p className="text-muted mt-1 text-">
                {description}
            </p>
        </div>
    );
};