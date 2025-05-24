import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Education: React.FC = () => {
  const educationItems = [
    {
      title: "Bachelor in Technology (B. Tech) in IT Engineering",
      institution: "M.L.V.T. and Engineering College, Bhilwara",
      date: "Expected Graduation: May, 2026",
      description:
        "Currently pursuing my B.Tech degree with a focus on Information Technology. Studying various aspects of computer science, software development, and IT infrastructure.",
    },
    {
      title: "Higher Secondary (Science Stream)",
      institution: "Govt. Senior Secondary Rajendra Marg School, Bhilwara",
      date: "2021-2022",
      description:
        "Completed higher secondary education with a focus on science subjects, building a strong foundation in mathematics and physics.",
    },
    {
      title: "Secondary Education",
      institution: "Happy Days Sec School, Azad Nagar, Bhilwara",
      date: "2019-2020",
      description:
        "Completed secondary education with excellent academic performance, developing a strong interest in technology and computer science.",
    },
  ];

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
    <section id="education" className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-400 pb-2">Education</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {educationItems.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { amount: 0.3 });
            const controls = useAnimation();

            useEffect(() => {
              if (isInView) {
                controls.start("visible");
              }
            }, [isInView, controls]);

            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                className="relative border-l-4 border-blue-400 pl-8 pb-10"
              >
                <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-blue-400 mb-1">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-gray-300 mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-gray-400 mb-4">{item.date}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
