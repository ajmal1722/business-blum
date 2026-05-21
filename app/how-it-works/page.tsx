import type { Metadata } from "next";

import HowItWorks from '@/components/HowItWorksPage/HowItWorksProcess';

export const metadata: Metadata = {
    title: "How It Works | Business Blum",
    description: "Discover how our smart technology matches you with the right business lenders in three simple steps.",
};
import WhyBusinessBlum from '@/components/HowItWorksPage/WhyBusinessBlum';
import PageHero from '@/components/Ui/PageHero';
import FAQSection from '@/components/HowItWorksPage/FAQSection';
import PageCTA from '@/components/Ui/PageCTA';

const page = () => {
    return (
        <div>
            <PageHero
                title='How It Works'
                description='Get matched with lenders in three simple steps'
            />
            <HowItWorks />
            <WhyBusinessBlum />
            <FAQSection />
            <PageCTA
                title="Ready to Get Started?"
                description="Complete your application in minutes and discover lenders that fit your needs"
                link="/apply"
            />
        </div>
    )
}

export default page;