import JourneyTimelineSection from '@/components/AboutPage/JourneyTimelineSection';
import LeadershipTeamSection from '@/components/AboutPage/LeaderShipTeamSection';
import OurStorySection from '@/components/AboutPage/OurStorySection';
import StatsSection from '@/components/AboutPage/StatsSection';
import PageHero from '@/components/Ui/PageHero';

const AboutPage = () => {
    return (
        <div>
            <PageHero
                title="About Business Blum"
                description="Revolutionizing how businesses access capital through smart technology and human expertise"
                bottomPaddingClassName="pb-48 md:pb-44"
            />
            <StatsSection />
            <OurStorySection />
            <JourneyTimelineSection />
            <LeadershipTeamSection />
        </div>
    )
}

export default AboutPage;