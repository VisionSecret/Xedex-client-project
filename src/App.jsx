import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import Lenis from "lenis";

// Importing components
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import HeroCards from "./components/sections/HeroCards";
import SecondSection from "./components/sections/SecondSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import IndustryStandardSection from "./components/sections/IndustryStandardSection";
import FAQSection from "./components/sections/FAQSection";
import ThirdSection from "./components/sections/ThirdSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Presales from "./pages/Presales";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Wait for all images to load before hiding the loader
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Show/hide scroll button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function (moved outside useEffect)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Refs for different sections (used for smooth scrolling and navigation)
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const roadmapRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const contactRef = useRef(null);

  // Storing refs in an object to pass to Navbar for section-based navigation
  const sectionsRef = {
    Home: heroRef,
    About: aboutRef,
    Roadmap: roadmapRef,
    Tokenomics: tokenomicsRef,
    Contact: contactRef,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 overflow-x-hidden">
      {loading ? (
        // Loading Screen
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="flex flex-col items-center text-white">
            <FaSpinner className="animate-spin text-5xl" />
            <p className="mt-4 text-lg">Please wait...</p>
          </div>
        </div>
      ) : (
        // Main Content
        <>
          {/* Navbar with section references for navigation */}
          <Navbar sectionsRef={sectionsRef} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section with reference */}
                  <div ref={heroRef}>
                    <Hero />
                  </div>

                  {/* Additional sections of the website */}
                  <HeroCards />
                  <SecondSection />

                  {/* Features section with reference */}
                  <div ref={tokenomicsRef}>
                    <FeaturesSection />
                  </div>

                  <IndustryStandardSection />

                  {/* FAQ section with reference */}
                  <div ref={aboutRef}>
                    <FAQSection />
                  </div>

                  {/* Roadmap section with reference */}
                  <div ref={roadmapRef}>
                    <ThirdSection />
                  </div>

                  {/* Contact section with reference */}
                  <div ref={contactRef}>
                    <ContactSection />
                  </div>
                </>
              }
            />
            <Route path="/presales" element={<Presales />} />
          </Routes>
          <Footer />

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-5 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 animate-bounce"
            >
              <AiOutlineArrowUp size={24} />
            </button>
          )}
        </>
      )}
    </div>
  );
}
