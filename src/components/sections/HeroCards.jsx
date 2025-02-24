import RainbowDots from "../ui/RainbowDots";

export default function HeroCards() {

  const features = [
    {
      title: "Low Fees",
      description:
        "Enjoy minimal trading fees compared to traditional platforms",
      icon: "💰",
    },
    {
      title: "Secure",
      description: "Fully decentralized and non-custodial platform",
      icon: "🔒",
    },
    {
      title: "Rewards",
      description: "Earn passive income through liquidity mining",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative py-10 sm:py-20 bg-[#2A1497]">
      <RainbowDots />
      <h2 className="text-4xl md:text-4xl font-bold text-white text-center mb-16">
        Featured Plans
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#3A1497]/80 to-[#1A0C5A]/90 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(42,20,151,0.5)]"
            >
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6C48E6] to-[#3B28A0] opacity-0 transition-opacity duration-500 group-hover:opacity-30" />

              {/* Glowing Border Effect */}
              <div className="absolute -inset-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C48E6] to-[#3B28A0] rounded-xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30" />
              </div>

              {/* Icon Container */}
              <div className="relative z-10 mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4D32B8] to-[#2A1497] p-4 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-[15deg]">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#A694FF] to-[#6C48E6]">
                  {feature.title}
                </h3>
                <p className="text-gray-300 transition-all duration-300 group-hover:text-gray-100 group-hover:translate-x-2">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Dots Pattern */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-[#6C48E6]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
