import { fundingOptions } from "@/data/applyFormData";

const ApplyTopBanner = () => {
    return (
        <div className="rounded-xl bg-success p-8 text-center text-white lg:p-10">
            <h2 className="text-xl font-extrabold lg:text-3xl">
                Access $5K - $10M in Business Funding
            </h2>

            <p className="mt-4 text-base text-white/90 lg:text-lg">
                From Merchant Cash Advances to SBA Loans
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {fundingOptions.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl bg-white/10 p-5 backdrop-blur-sm"
                    >
                        <p className="text-sm text-white/80">
                            {item.title}
                        </p>

                        <h3 className="mt-2 text-xl font-extrabold">
                            {item.credit}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplyTopBanner;
