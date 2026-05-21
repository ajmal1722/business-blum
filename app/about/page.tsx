import StatsSection from '@/components/HowItWorksPage/StatsSection';
import PageHero from '@/components/Ui/PageHero';

const AboutPage = () => {
    return (
        <div>
            <PageHero
                title="About Business Blum"
                description="Revolutionizing how businesses access capital through smart technology and human expertise"
                bottomPaddingClassName="pb-52 md:pb-52"
            />
            <StatsSection />
        </div>
    )
}

export default AboutPage;