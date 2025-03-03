import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#27147c] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Left - Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="/images/logo2.jpg"
                alt="Xendex Logo"
                width={140}
                height={40}
                className="h-16 w-16 object-cover object-center rounded-full"
              />
            </Link>
          </div>

          {/* Center - Links & Copyright */}
          <div className="text-center">
            <ul className="flex justify-center space-x-6 text-sm text-gray-300">
              <li>
                <Link
                  to=""
                  href="#privacy"
                  className="relative hover:text-white transition text-sm sm:text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  href="#terms"
                  className="relative hover:text-white transition text-sm sm:text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  href="#support"
                  className="relative hover:text-white transition text-sm sm:text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  href="#contact"
                  className="relative hover:text-white transition text-sm sm:text-lg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Xendex. All Rights Reserved |
              developer{" "}
              <Link
                to={"mailto:visionsecret10@gmail.com"}
                className="relative hover:text-white transition text-xs sm:text-xs font-extrabold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
           after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                Contact
              </Link>
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex gap-5">
            {[
              { href: "https://facebook.com", icon: <FaFacebookF /> },
              { href: "https://twitter.com", icon: <FaWhatsapp /> },
              { href: "https://instagram.com", icon: <FaInstagram /> },
              { href: "https://linkedin.com", icon: <FaLinkedin /> },
            ].map((social, index) => (
              <Link
                to=""
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition text-lg"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
