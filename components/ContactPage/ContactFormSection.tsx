import Container from "@/components/Ui/Container";
import MessageForm from "./MessageForm";
import BusinessHoursCard from "./BusinessHoursCard";
import FAQCard from "./FAQCard";

const ContactFormSection = () => {
    return (
        <section className="pb-20 lg:pb-28">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1.9fr_0.9fr]">
                    {/* Left Side */}
                    <MessageForm />

                    {/* Right Side */}
                    <div className="space-y-8">
                        <BusinessHoursCard />
                        <FAQCard />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactFormSection;