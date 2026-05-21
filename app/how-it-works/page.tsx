import HowItWorks from '@/components/HowItWorksPage/HowItWorksProcess';
import WhyBusinessBlum from '@/components/HowItWorksPage/WhyBusinessBlum';
import PageHero from '@/components/Shared/PageHero';
import FAQSection from '@/components/HowItWorksPage/FAQSection';

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
        </div>
    )
}

export default page