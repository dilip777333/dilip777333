import React, { useRef } from "react";
import { MapPin, Phone, Mail, Download } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About: React.FC = () => {
  const leftRef = useRef(null);
  const cardsRef = useRef(null);

  const leftInView = useInView(leftRef, { amount: 0.3 });
  const cardsInView = useInView(cardsRef, { amount: 0.3 });

  const leftControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (leftInView) {
      leftControls.start("visible");
    } else {
      leftControls.start("hidden");
    }
  }, [leftInView, leftControls]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    } else {
      cardsControls.start("hidden");
    }
  }, [cardsInView, cardsControls]);

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="border-b-4 border-blue-400 pb-2">About Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            ref={leftRef}
            className="md:w-1/2"
            variants={leftVariants}
            initial="hidden"
            animate={leftControls}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a motivated IT student experienced in web development
              using HTML, CSS, JavaScript, React, and Tailwind CSS.
              I&apos;ve built projects like an Amazon clone, to-do app, and
              e-commerce site with clean UI and functionality.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a strong collaborator with problem-solving skills,
              aiming to grow as a full-stack developer and deliver effective
              solutions. I&apos;m passionate about creating intuitive and
              responsive web applications that provide excellent user
              experiences.
            </p>
            <div className="flex flex-col md:flex-row gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="text-blue-400" size={20} />
                <span>Bhilwara, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-blue-400" size={20} />
                <span>+91-9664234496</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-blue-400" size={20} />
                <span>bhatidilip10@gmail.com</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/18gD4L_GNBUKlbNeCc1fNdY3zoxVPxmnK/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={cardsRef}
            className="md:w-1/2 grid grid-cols-2 gap-4"
            variants={cardVariants}
            initial="hidden"
            animate={cardsControls}
          >
            {[
              {
                title: "Education",
                content:
                  "B.Tech in IT Engineering at M.L.V.T. and Engineering College, Bhilwara",
              },
              {
                title: "Experience",
                content: "3 Months Internship at AMPARO SECURE TECH (BHILWARA)",
              },
              {
                title: "Interests",
                content: "Web Development, UI/UX Design, Problem Solving",
              },
              {
                title: "Languages",
                content: "English, Hindi",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="bg-gray-700/50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-2 text-blue-400">
                  {card.title}
                </h3>
                <p className="text-gray-300">{card.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
