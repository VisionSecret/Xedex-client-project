// sections/FeaturesSection.jsx
import FeatureCard from "../FeatureCard";
import RainbowDots from "../ui/RainbowDots";

export default function FeaturesSection() {
  const features = [
    {
      title: "Secure Anonymity",
      icon: "🕶️",
      content:
        "The core purpose of every decentralized exchange is to ensure non-custodial and permission-less transactions with no need for KYC. When fully launched, Xendex will offer a very secure and hack-proof platform where users can carry out transactions without fear or doubt.",
    },
    {
      title: "Liquidity Pool",
      icon: "💧",
      content:
        "For any DEX to achieve sustainability, there should be an existence of a liquidity pool for seamless trading activities. Xendex, developed on the Cardano community, allows users to participate in liquidity pools and earn rewards on each transaction.",
    },
    {
      title: "Vote & Governance",
      icon: "🗳️",
      content:
        "Xendex native token holders can engage in decision-making, cast votes, and participate in governance. To maintain decentralization, ACX token holders will help shape the future of Xendex by proposing or deciding on new features.",
    },
    {
      title: "Staking Platform",
      icon: "🔒",
      content:
        "Xendex enables users to stake and lock down their coins for a certain period to support our blockchain network and earn rewards. Our staking platform provides a way to generate passive income with better interest rates compared to other platforms.",
    },
    {
      title: "Interoperability",
      icon: "🔗",
      content:
        "With the Mary and Alonzo hard fork upgrade on Cardano, ERC-20 and BEP-20 developers can bridge their tokens to the Cardano network using our token bridge contracts. This enables cross-chain trading from Cardano to other chains and vice versa.",
    },
    {
      title: "Swift Transactions",
      icon: "⚡",
      content:
        "Our user-friendly platform ensures fast transactions when trading or swapping tokens at a very low fee. With our native token, no fees will be charged.",
    },
  ];

  return (
    <section className="relative py-10 sm:py-20 bg-[#2A1497]" id="roadmap">
      <RainbowDots />
      <div className="container mx-auto px-6 sm:px-8 md:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ACX Decentralized Exchange
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 font-medium leading-relaxed">
            Xendex revolutionizes decentralized finance through our advanced
            automated market maker (AMM) protocol, built natively on Cardano. We
            combine sustainability with cutting-edge blockchain technology to
            empower global financial inclusion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} icon={feature.icon}>
              {feature.content}
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
