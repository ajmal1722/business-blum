import Button from "@/components/Ui/Button";
import FormField from "@/components/Ui/FormField";
import { Send } from "lucide-react";

const MessageForm = () => {
    return (
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
    );
};

export default MessageForm;
