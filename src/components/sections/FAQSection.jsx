// sections/FAQSection.jsx
import HoverButton from "../ui/HoverButton";
import RainbowDots from "../ui/RainbowDots";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Xendex?",
      answer:
        "Xendex is a non-custodial decentralized exchange (DEX) built on the Cardano blockchain, offering advanced AMM protocols for secure and efficient token swaps, liquidity pooling, and yield farming.",
    },
    {
      question: "Why is Xendex Unique?",
      answer:
        "Our platform combines Cardano's UTXO model with innovative EAMM technology, providing lower fees, enhanced security, and true decentralization compared to traditional DEX platforms.",
    },
    {
      question: "When will Xendex DEX launch fully?",
      answer:
        "We're currently in final testing phases with planned mainnet launch Q1 2025. Join our community for real-time updates and launch announcements.",
    },
    {
      question: "Xendex admin contacted me. Is it okay?",
      answer: (
        <span className="text-red-400">
          No, it is not. Xendex team will never initiate contact first.
          <br />
          <br />
          <span className="font-semibold">Important:</span> Anyone claiming to
          be an admin contacting you first is likely a scammer. Immediately
          report to us via official channels:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Telegram: @Xendex_support</li>
            <li>Email: support@Xendex.io</li>
          </ul>
        </span>
      ),
    },
  ];

  return (
    <section className="relative sm:py-20 bg-[#2A1497]" id="about">
      <div className="container mx-auto px-4">
      <RainbowDots />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gradient-to-br from-[#3B28A0]/50 to-[#2A1497]/30 p-8 border border-white/10 hover:border-[#6C48E6]/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start cursor-pointer">
                  <h3 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  <span className="text-[#6C48E6] group-hover:text-[#A694FF] ml-4">
                    ▼
                  </span>
                </div>

                <div className="mt-4 text-gray-300 space-y-4">
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-16 text-center">
            <div className="bg-red-900/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">
                Security Alert
              </h3>
              <p className="text-red-300">
                Never share your private keys or seed phrases. Xendex will never
                ask for sensitive information.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-lg">
                Still have questions? Contact us directly:
              </p>
              <div className="flex justify-center gap-4">
                <HoverButton
                  text="Telegram Support"
                  fromColor="from-[#6C48E6]"
                  toColor="to-[#4D32B8]"
                  size="sm"
                />
                <HoverButton
                  text="Email Support"
                  fromColor="from-[#4D32B8]"
                  toColor="to-[#3B28A0]"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
