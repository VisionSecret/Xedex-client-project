// sections/ContactSection.jsx
import HoverButton from "../ui/HoverButton";
import RainbowDots from "../ui/RainbowDots";

export default function ContactSection() {
  return (
    <>
      <section className="relative py-10 sm:py-16 bg-[#2A1497]" id="contact">
        <div className="max-w-5xl mx-auto pt-10 px-6">
        <RainbowDots />
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Support
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Reach out to the Xendex team for inquiries about swaps, listings,
              staking, and more.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#3B28A0]/70 to-[#2A1497]/90 p-6 sm:p-8 border border-white/10 backdrop-blur-lg">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-[#2A1497]/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#6C48E6] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-[#2A1497]/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#6C48E6] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#2A1497]/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#6C48E6] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full rounded-lg bg-[#2A1497]/30 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#6C48E6] transition-colors h-40"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <HoverButton
                  text="SEND MESSAGE"
                  fromColor="from-[#6C48E6]"
                  toColor="to-[#4D32B8]"
                  type="submit"
                  className="px-4 py-1.5 sm:px-6 sm:py-3 text-sm sm:text-lg"
                />
              </div>
            </form>
          </div>

          {/* Additional Support Info */}
          <div className="mt-12 text-center text-gray-400">
            <p className="mb-4">For urgent matters, contact us directly:</p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="mailto:support@xendex.io"
                className="text-[#6C48E6] hover:text-[#A694FF] transition-colors"
              >
                support@Xendex.io
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="https://t.me/xendex_support"
                className="text-[#6C48E6] hover:text-[#A694FF] transition-colors"
              >
                Telegram Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
