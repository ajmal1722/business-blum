import type { Metadata } from "next";

import ApplyFormSection from "@/components/ApplyPage/ApplyFormSection"

export const metadata: Metadata = {
    title: "Apply Now | Business Blum",
    description: "Start your business loan application with Business Blum.",
};
import ApplyHeroSection from "@/components/ApplyPage/ApplyHeroSection"


const page = () => {
    return (
        <div>
            <ApplyHeroSection />
            <ApplyFormSection />
        </div>
    )
}

export default page
