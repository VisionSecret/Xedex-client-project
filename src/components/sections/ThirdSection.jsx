// sections/ThirdSection.jsx
import RainbowDots from "../ui/RainbowDots";

const ThirdSection = () => {
  return (
    <div className="relative pt-20 py-0 sm:py-16 bg-[#2A1497]">
      <div className="max-w-6xl mx-auto px-6">
        <RainbowDots />

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Xendex Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Xendex is geared towards developing the best and most unique
            decentralized exchange on Cardano ecosystem. Our platform utilizes
            the automated market maker protocol to eliminate intermediaries
            while trading native Cardano assets.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-32">
          <img
            src="/images/thirdSection.png"
            alt="Xendex Ecosystem"
            loading="lazy"
            decoding="async"
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl object-center object-cover"
          />
        </div>

        {/* Team Section */}
        <div className="text-center mt-16">
          <RainbowDots />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Xendex Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The team at Xendex is comprised of a multi-cultural group of
            crypto-enthusiasts, brought together by the goal of democratizing
            finance!
          </p>
        </div>

        {/* Vision Section */}
        <div className="text-center mt-20 sm:mt-32">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            The Xendex Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team is planning to offer additional DeFi services on the Xendex
            platform, including an NFT marketplace, an IDO launchpad, and a
            metaverse for virtual land purchases and gaming. Join us on this
            exciting journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
