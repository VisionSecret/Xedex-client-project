import { useState } from "react";
import HoverButton from "./ui/HoverButton";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ sectionsRef }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (section == "Home") {
      navigate("/");
      setMenuOpen(false); // Close menu on mobile when navigating
      sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section == "presales") {
      setMenuOpen(false); // Close menu on mobile when navigating
      sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setMenuOpen(false); // Close menu on mobile when navigating
      sectionsRef[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-gradient-to-b bg-[#16004D]/80 to-transparent backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/logo2.jpg"
              alt="Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-cover object-center rounded-full"
            />
          </Link>
          <span className="ml-2 sm:ml-4 text-xl sm:text-2xl font-bold text-white">
            Xendex
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleScroll("Home")}
            className="relative py-2 text-sm font-sans font-extrabold text-white/80 hover:text-white 
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </button>
          <Link to="/presales">
            <button
              className="relative py-2 text-sm font-sans font-medium text-white/80 hover:text-white 
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {/* pages */}
              Presales
            </button>
          </Link>
          <button
            onClick={() => handleScroll("About")}
            className="relative py-2 text-sm font-sans font-medium text-white/80 hover:text-white 
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("Roadmap")}
            className="relative py-2 text-sm font-sans font-medium text-white/80 hover:text-white 
             after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
            after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Roadmap
          </button>
          <button
            onClick={() => handleScroll("Tokenomics")}
            className="relative py-2 text-sm font-sans font-medium text-white/80 hover:text-white 
             after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
            after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Tokenomics
          </button>
          <button
            onClick={() => handleScroll("Contact")}
            className="relative py-2 text-sm font-sans font-medium text-white/80 hover:text-white 
             after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
            after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </button>
        </div>
        <div className="btn hidden md:block">
          <HoverButton
            text="Connect Wallet"
            size="md"
            fromColor="from-blue-500"
            toColor="to-purple-500"
            onClick={() => alert("This Website is in under development!")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-lg p-4 flex flex-col space-y-4">
          <button
            onClick={() => handleScroll("Home")}
            className="text-white text-lg py-2 hover:text-purple-400 transition"
          >
            Home
          </button>
          <Link to="/presales" className="text-center">
            <button
              onClick={() => handleScroll("presales")}
              className="text-white text-lg py-2 hover:text-purple-400 transition"
            >
              {/* pages */}
              Presales
            </button>
          </Link>
          <button
            onClick={() => handleScroll("About")}
            className="text-white text-lg py-2 hover:text-purple-400 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("Roadmap")}
            className="text-white text-lg py-2 hover:text-purple-400 transition"
          >
            Roadmap
          </button>
          <button
            onClick={() => handleScroll("Tokenomics")}
            className="text-white text-lg py-2 hover:text-purple-400 transition"
          >
            Tokenomics
          </button>
          <button
            onClick={() => handleScroll("Contact")}
            className="text-white text-lg py-2 hover:text-purple-400 transition"
          >
            Contact
          </button>
          <HoverButton
            text="Connect Wallet"
            size="md"
            fromColor="from-purple-600"
            toColor="to-blue-500"
            className="w-full text-center"
            onClick={() => alert("This Website is in under development!")}
          />
        </div>
      )}
    </nav>
  );
}
