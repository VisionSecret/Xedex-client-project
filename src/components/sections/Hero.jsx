// components/Hero.jsx
import { AiOutlineArrowDown } from "react-icons/ai";
import HoverButton from "../ui/HoverButton";

export default function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-screen" id="home">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bgHero.jpg" // Add your image path
          alt="Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 pt-40 pb-10 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Trade Crypto NFTs with Confidence
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-xl font-semibold text-gray-300">
          Decentralized NFT exchange powered by advanced AMM protocol. Swap,
          pool, and earn rewards on your favorite NFTs.
        </p>
        <HoverButton
          text="Launch App"
          size="md"
          fromColor="from-blue-500"
          toColor="to-purple-500"
          type="submit"
        />
      </div>

      {/* Optional Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-pulse">
        {/* <div className="h-10 w-10 rounded-3xl border-2 border-white"> */}
        <button className=" text-white">
          <AiOutlineArrowDown size={45} />
        </button>
        {/* </div> */}
      </div>  
    </section>
  );
}
