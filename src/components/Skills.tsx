import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "Tailwind CSS", level: 80, color: "bg-teal-500" },
    { name: "JavaScript", level: 75, color: "bg-yellow-500" },
    { name: "Core Java", level: 70, color: "bg-red-500" },
    { name: "React", level: 65, color: "bg-cyan-500" },
  ];

  const softSkills = [
    "Adaptability",
    "Teamwork and Collaboration",
    "Communication",
    "Leadership",
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Creativity",
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
    >
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-400 pb-2">Technical Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div
                  className={`h-2.5 rounded-full ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right text-gray-400 text-sm">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-200">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center shadow-md border border-gray-700 hover:border-blue-400 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
