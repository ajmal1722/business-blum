import LoanGuideSection from "@/components/LoanOptionsPage/LoanGuideSection"
import LoanListing from "@/components/LoanOptionsPage/LoanListing"
import PageCTA from "@/components/Ui/PageCTA"
import PageHero from "@/components/Ui/PageHero"

const page = () => {
    return (
        <div>
            <PageHero
                title="Business Funding Options"
                description="We connect you with lenders across all types of business financing. Find the perfect loan for your needs."
                stats={[
                    { label: "200+ Lenders" },
                    { label: "$5K - $10M Range" },
                    { label: "24-Hour Matching" },
                ]}
            />
            <LoanListing />
            <LoanGuideSection />
            <PageCTA
                title="Find Your Perfect Loan Match"
                description="Our smart matching technology connects you with the right lenders based on your unique business needs and financial profile."
                buttonText="Start Your Application"
            />
        </div>
    )
}

export default page;