import CoreValues from '@/components/AboutPage/CoreValues';
import JourneyTimelineSection from '@/components/AboutPage/JourneyTimelineSection';
import LeadershipTeamSection from '@/components/AboutPage/LeaderShipTeamSection';
import OurStorySection from '@/components/AboutPage/OurStorySection';
import StatsSection from '@/components/AboutPage/StatsSection';
import WhatMakesUsDifferent from '@/components/AboutPage/WhatMakesUsDifferent';
import PageCTA from '@/components/Ui/PageCTA';
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
            <CoreValues />
            <WhatMakesUsDifferent />
            <PageCTA
                title="Join 50,000+ Businesses We've Helped"
                description="Experience the Business Blum difference. Apply now and get matched with the right lenders for your business."
                buttonText="Start Your Application"
                link="/apply"
            />
        </div>
    )
}

export default AboutPage;