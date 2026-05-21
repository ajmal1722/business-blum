import HowItWorks from '@/components/HowItWorksPage/HowItWorksProcess';
import WhyBusinessBlum from '@/components/HowItWorksPage/WhyBusinessBlum';
import PageHero from '@/components/Shared/PageHero';
import FAQSection from '@/components/HowItWorksPage/FAQSection';
import PageCTA from '@/components/Shared/PageCTA';

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
            />
        </div>
    )
}

export default page;