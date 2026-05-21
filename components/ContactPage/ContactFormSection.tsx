import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";

import {
    Clock3,
    CircleHelp,
    Send,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";

const ContactFormSection = () => {
    return (
        <section className="pb-20 lg:pb-28">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1.9fr_0.9fr]">
                    {/* Left Side */}
                    <div className="rounded-3xl bg-white p-8 shadow-lg lg:p-12 border border-border">
                        {/* Top Accent */}
                        <div className="mb-8 h-2 w-28 rounded-full bg-success" />

                        {/* Heading */}
                        <h2 className="text-secondary text-4xl font-extrabold">
                            Send Us a Message
                        </h2>

                        {/* Form */}
                        <form className="mt-10 space-y-7">
                            {/* Row 1 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    label="First Name *"
                                    placeholder="John"
                                />

                                <FormField
                                    label="Last Name *"
                                    placeholder="Doe"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    label="Email *"
                                    placeholder="john@example.com"
                                    type="email"
                                />

                                <FormField
                                    label="Phone"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            {/* Subject */}
                            <FormField
                                label="Subject *"
                                placeholder="How can we help you?"
                            />

                            {/* Message */}
                            <div>
                                <label className="text-secondary mb-3 block text-lg font-bold">
                                    Message *
                                </label>

                                <textarea
                                    rows={7}
                                    placeholder="Tell us more about your needs..."
                                    className="border-border placeholder:text-muted focus:border-success w-full rounded-2xl border bg-transparent px-6 py-5 text-lg outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <Button className="flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-semibold shadow-lg">
                                Send Message

                                <Send className="size-6" />
                            </Button>

                            {/* Footer Text */}
                            <p className="text-muted text-center text-sm">
                                By submitting this form, you agree to our Privacy
                                Policy and Terms of Service.
                            </p>
                        </form>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">
                        {/* Business Hours */}
                        <div className="rounded-lg border border-success/20 bg-success/15 backdrop-blur-md p-8">
                            <Clock3 className="size-11 text-success mb-5" />

                            <h3 className="text-secondary text-2xl font-extrabold">
                                Business Hours
                            </h3>

                            <div className="text-muted mt-4 space-y-4">
                                <div>
                                    <p className="text-secondary font-semibold">
                                        Monday - Friday
                                    </p>

                                    <p className="mt-2">
                                        8:00 AM - 8:00 PM EST
                                    </p>
                                </div>

                                <div>
                                    <p className="text-secondary font-semibold">
                                        Saturday
                                    </p>

                                    <p className="mt-2">
                                        9:00 AM - 5:00 PM EST
                                    </p>
                                </div>

                                <div>
                                    <p className="text-secondary font-semibold">
                                        Sunday
                                    </p>

                                    <p className="mt-2">
                                        Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Card */}
                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <CircleHelp className="size-11 text-success mb-5" />

                            <h3 className="text-secondary text-2xl font-extrabold">
                                FAQ
                            </h3>

                            <p className="text-muted mt-5 leading-relaxed">
                                Visit our FAQ page for answers to common
                                questions about our loan matching service.
                            </p>

                            <Link
                                href="/how-it-works"
                                className="text-success/80 hover:text-success mt-6 inline-flex items-center gap-1 font-semibold"
                            >
                                View FAQ
                                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFormSection;

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
                className="border-border placeholder:text-muted focus:border-success py-3 w-full rounded-md border bg-transparent px-6 text-lg outline-none transition"
            />
        </div>
    );
};