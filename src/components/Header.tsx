import React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  activeSection,
  scrollToSection,
}) => {
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-400">
          Dilip Singh Bhati
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`${
                activeSection === item.toLowerCase()
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300 hover:text-blue-300"
              } transition-colors duration-300`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Animated Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-gray-800 py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-gray-300"
                  } text-left py-2 px-4 hover:bg-gray-700 rounded transition-colors duration-300`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
