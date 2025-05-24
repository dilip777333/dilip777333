import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-400 pb-2">
            Work Experience
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeUp}
            className="relative border-l-4 border-blue-400 pl-8 pb-10"
          >
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-1">
                Web Development Intern
              </h3>
              <h4 className="text-lg text-gray-300 mb-2">
                AMPARO SECURE TECH, Bhilwara
              </h4>
              <p className="text-gray-400 mb-4">3 Months Internship</p>
              <p className="text-gray-300">
                During my internship, I gained practical experience in web
                development, working on real-world projects and enhancing my
                skills in HTML, CSS, JavaScript, and React. I collaborated
                with a team to develop responsive and user-friendly web
                applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Responsive Design",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
