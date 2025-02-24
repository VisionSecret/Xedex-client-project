// sections/IndustryStandardSection.jsx
import HoverButton from "../ui/HoverButton";
import RainbowDots from "../ui/RainbowDots";

export default function IndustryStandardSection() {
  return (
    <section className="relative py-10 sm:py-36 bg-[#2A1497]" id="tokenomics">
      <div className="container mx-auto px-4">
        <RainbowDots />
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Setting The Industry Standard
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Xendex leverages Cardans UTXO mechanism and EAMM (Extended
              Automated Market Maker) technology to enable decentralized trading
              through innovative P2P (peer-to-pool) pricing algorithms.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Community Card */}
            <div className="relative group rounded-2xl bg-gradient-to-br from-[#3B28A0] to-[#2A1497]/80 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(42,20,151,0.5)]">
              <div className="mb-6 text-4xl">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Community
              </h3>
              <p className="text-gray-300 mb-6">
                Connect with Cardano pioneers, swap assets, and farm value
                through our AACN ecosystem
              </p>
              <HoverButton
                text="Join Community"
                size="sm"
                fromColor="from-[#6C48E6]"
                toColor="to-[#4D32B8]"
              />
            </div>

            {/* Platform Card */}
            <div className="relative group rounded-2xl bg-gradient-to-br from-[#3B28A0] to-[#2A1497]/80 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(42,20,151,0.5)]">
              <div className="mb-6 text-4xl">💱</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                DEX Platform
              </h3>
              <p className="text-gray-300 mb-6">
                All-in-one solution for buying, swapping, and yield farming with
                SACX token integration
              </p>
              <HoverButton
                text="Launch App"
                size="sm"
                fromColor="from-[#6C48E6]"
                toColor="to-[#4D32B8]"
              />
            </div>

            {/* Ecosystem Card */}
            <div className="relative group rounded-2xl bg-gradient-to-br from-[#3B28A0] to-[#2A1497]/80 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(42,20,151,0.5)]">
              <div className="mb-6 text-4xl">🌱</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Build Ecosystem
              </h3>
              <p className="text-gray-300 mb-6">
                Contribute to the evolution of Cardanos most reliable AMM-based
                DEX through governance
              </p>
              <HoverButton
                text="Get Involved"
                size="sm"
                fromColor="from-[#6C48E6]"
                toColor="to-[#4D32B8]"
              />
            </div>
          </div>

          {/* Technology Highlight */}
          <div className="rounded-xl from-[#383383] to-[#35209c]/80 p-8 border border-[#0AA8AF]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  UTXO Innovation
                </h3>
                <p className="text-gray-300">
                  Our conservation function-based pricing algorithm utilizes
                  Cardanos unique UTXO model to ensure fair and transparent
                  market operations, moving beyond traditional order book
                  systems.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-r from-[#6C48E6] to-[#3B28A0] rounded-xl flex items-center justify-center text-6xl">
                ⚙️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
