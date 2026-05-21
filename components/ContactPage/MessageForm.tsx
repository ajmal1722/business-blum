"use client";

import { useState } from "react";
import Button from "@/components/Ui/Button";
import FormField from "@/components/Ui/FormField";
import { Send, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const MessageForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const newErrors: Record<string, string> = {};
        if (!data.firstName?.trim()) newErrors.firstName = "First name is required";
        if (!data.lastName?.trim()) newErrors.lastName = "Last name is required";
        if (!data.email?.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Invalid email format";
        if (!data.subject?.trim()) newErrors.subject = "Subject is required";
        if (!data.message?.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // Log to console as requested
        console.log("Form Submitted Successfully:", data);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();

            // Fire toast
            toast.success("Message Sent! We'll get back to you soon.", {
                style: {
                    borderRadius: '12px',
                    background: '#ecfdf5', // bg-success/10
                    color: '#047857', // text-success
                    border: '1px solid #a7f3d0'
                },
                iconTheme: {
                    primary: '#10b981',
                    secondary: '#ecfdf5',
                },
            });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const target = e.target;
        const name = target.name;

        if (name && errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <div className="relative rounded-3xl bg-white p-8 shadow-lg lg:p-12 border border-border overflow-hidden">
            {/* Top Accent */}
            <div className="mb-8 h-2 w-28 rounded-full bg-success" />

            {/* Heading */}
            <h2 className="text-secondary text-4xl font-extrabold">
                Send Us a Message
            </h2>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                onChange={handleChange}
                className="mt-10 space-y-7"
                noValidate
            >
                {/* Row 1 */}
                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        label="First Name *"
                        name="firstName"
                        placeholder="John"
                        error={errors.firstName}
                    />

                    <FormField
                        label="Last Name *"
                        name="lastName"
                        placeholder="Doe"
                        error={errors.lastName}
                    />
                </div>

                {/* Row 2 */}
                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        label="Email *"
                        name="email"
                        placeholder="john@example.com"
                        type="email"
                        error={errors.email}
                    />

                    <FormField
                        label="Phone"
                        name="phone"
                        placeholder="(555) 123-4567"
                        error={errors.phone}
                    />
                </div>

                {/* Subject */}
                <FormField
                    label="Subject *"
                    name="subject"
                    placeholder="How can we help you?"
                    error={errors.subject}
                />

                {/* Message */}
                <div>
                    <label className="text-secondary mb-3 block text-lg font-bold">
                        Message *
                    </label>

                    <textarea
                        name="message"
                        rows={7}
                        placeholder="Tell us more about your needs..."
                        className={`border-border placeholder:text-muted focus:border-success focus:ring-success/20 w-full rounded-2xl border bg-transparent px-6 py-5 text-lg outline-none transition focus:ring-2 ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""
                            }`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.message}</p>}
                </div>

                {/* Button */}
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-semibold shadow-lg disabled:opacity-70 transition-all"
                >
                    {isSubmitting ? (
                        <>
                            Sending...
                            <Loader2 className="size-6 animate-spin" />
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="size-6" />
                        </>
                    )}
                </Button>

                {/* Footer Text */}
                <p className="text-muted text-center text-sm">
                    By submitting this form, you agree to our Privacy
                    Policy and Terms of Service.
                </p>
            </form>
        </div>
    );
};

export default MessageForm;
