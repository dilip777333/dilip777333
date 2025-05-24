import React from "react";
import { Github as GitHub, Linkedin, Mail } from "lucide-react";
import profilePic from "../img/profilepic.jpeg";
import { motion } from "framer-motion";

type HeroProps = {
  scrollToSection: (id: string) => void;
};

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <motion.section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-400">Hello, I&apos;m</span>
            <br />
            Dilip Singh Bhati
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Web Development Aspirant
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Motivated IT student with experience in web development using
            HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              View Projects
            </motion.a>
          </div>
          <motion.div
            className="flex mt-8 space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/dilip777333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dilip-singh-bhati-b38b34287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bhatidilip10@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl shadow-blue-500/20">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-gray-900 px-6 py-2 rounded-full border border-blue-400 shadow-lg"
            >
              <span className="text-blue-400 font-bold">Web Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
