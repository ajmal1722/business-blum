import LoanListing from "@/components/LoanOptionsPage/LoanListing"
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
        </div>
    )
}

export default page