import React, { useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Github as GitHub, Linkedin } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const Contact: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0f172a] text-white" ref={sectionRef}>
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 border-b-4 inline-block border-blue-400 pb-1"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
        >
          Contact Me
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            Feel free to contact me for any work or suggestions. I'm always open
            to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Bhilwara, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-blue-400 text-xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>bhatidilip10@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-blue-400 text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91-9664234496</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-8">
            <motion.a
              href="https://github.com/dilip777333"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <GitHub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dilip-singh-bhati-b38b34287/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="pt-3"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <form
            action="https://formspree.io/f/mvoeojod"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
