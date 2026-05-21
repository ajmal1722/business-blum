import JourneyTimelineSection from '@/components/AboutPage/JourneyTimelineSection';
import OurStorySection from '@/components/AboutPage/OurStorySection';
import StatsSection from '@/components/AboutPage/StatsSection';
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
            <OurStorySection />
            <JourneyTimelineSection />
        </div>
    )
}

export default AboutPage;