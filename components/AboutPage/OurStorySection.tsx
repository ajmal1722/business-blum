import Container from "@/components/Ui/Container";

const OurStorySection = () => {
    return (
        <section className="py-12 lg:py-20">
            <Container>
                <div className="mx-auto max-w-4xl">
                    {/* Accent Line */}
                    <div className="bg-success h-2 w-32 rounded-full" />

                    {/* Heading */}
                    <h2 className="text-secondary mt-8 text-4xl font-extrabold md:text-6xl">
                        Our Story
                    </h2>

                    {/* Content */}
                    <div className="text-secondary mt-12 space-y-6 text-base leading-9 md:text-xl">
                        <p>
                            Business Blum was born from frustration. Our founders,
                            Sarah Chen and Michael Rodriguez, were serial
                            entrepreneurs who had each launched multiple
                            businesses. They knew firsthand the nightmare of
                            trying to secure business funding.
                        </p>

                        <p>
                            Sarah spent three months applying to 15 different
                            lenders when launching her second startup. The process
                            was exhausting: repetitive applications, conflicting
                            requirements, and endless waiting. Michael had a
                            similar experience — he was approved by one lender
                            only to discover after the fact that their rates were
                            4% higher than what he could have gotten elsewhere.
                        </p>

                        {/* Highlight Quote */}
                        <blockquote className="text-secondary text-lg font-bold leading-snug md:text-2xl">
                            "There had to be a better way," Sarah said.
                            "Why should every business owner have to go through
                            this broken process?"
                        </blockquote>

                        <p>
                            That question led to Business Blum. The concept was
                            simple: create one application that could match
                            businesses with multiple lenders simultaneously,
                            giving borrowers transparency, choice, and speed.
                        </p>

                        <p>
                            We launched in 2023 with 25 lending partners and
                            helped our first 100 businesses within a month.
                            Today, we've grown to 200+ lending partners and have
                            helped over 50,000 businesses access $2.5 billion in
                            funding.
                        </p>

                        <p>
                            But we're not done. Every day, we're improving our
                            technology, expanding our lender network, and helping
                            more businesses achieve their dreams.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurStorySection;