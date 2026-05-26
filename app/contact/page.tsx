import type { Metadata } from "next";

import ContactFormSection from "@/components/ContactPage/ContactFormSection";

export const metadata: Metadata = {
    title: "Contact Us | Business Blum",
    description: "Get in touch with the Business Blum team for any questions or support.",
};
import ContactSection from "@/components/ContactPage/ContactSection";
import LocationsSection from "@/components/ContactPage/LocationSection";
import PageHero from "@/components/Ui/PageHero";

const page = () => {
    return (
        <div>
            <PageHero
                title='Get in Touch'
                description='Have questions? Our team is here to help you find the right loan solution'
                bottomPaddingClassName="pb-52 md:pb-60"
            />
            <ContactSection />
            <ContactFormSection />
            <LocationsSection />
        </div>
    )
}

export default page;