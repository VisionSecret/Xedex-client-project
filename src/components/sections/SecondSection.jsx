// sections/SecondSection.jsx
import HoverButton from "../ui/HoverButton";
import RainbowDots from "../ui/RainbowDots";

export default function SecondSection() {
  return (
    <section className="relative px-2 pb-10 sm:px-0 sm:py-20 backdrop-blur-lg bg-[#2A1497]">
      <RainbowDots />
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image + Content Grid */}
          <div className="grid md:grid-cols-2 gap-24 items-center">
            {/* Image Column */}
            <div className="relative order-1 md:order-none">
              <img
                src="/images/dex.png"
                alt="Xendex Ecosystem"
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl border-2 border-white/10 scale-105 hover:scale-110 sm:hover:scale-110 transition-transform duration-300"
              />

              {/* Optional Image Decoration */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl -z-10" />
            </div>

            {/* Content Column */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                $ACX Ownership Means Access To Our
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Xendex Decision-Making Ecosystem!
                </span>
              </h2>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Xendex is an AMM-based non-custodial decentralized exchange
                  on the Cardano blockchain that offers liquidity pools for
                  traders, allows users to participate as liquidity providers
                  while earning commission on every trade, and creates a market
                  for swapping Cardano native tokens at ultra-low fees.
                </p>

                <p className="text-lg leading-relaxed">
                  We solve critical challenges faced by decentralized exchanges
                  including:
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Automated market maker adoption</li>
                    <li>Smart contract-structured liquidity pool access</li>
                    <li>Cross-chain token interoperability</li>
                  </ul>
                </p>
              </div>

              <div className="mt-12">
                <HoverButton
                  text="JOIN TELEGRAM GROUP"
                  size="lg"
                  fromColor="from-blue-500"
                  toColor="to-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
