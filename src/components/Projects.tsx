import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "Developed a full e-commerce site frontend with features like wishlist, add to cart, filter panel, and product detail page. Focused on clean UI and efficient state management.",
      tech: ["React", "Tailwind CSS"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Amazon Website Clone",
      description:
        "Created a clone of Amazon's website using HTML and CSS, demonstrating proficiency in Front-End Development.",
      tech: ["HTML", "CSS"],
      image:
        "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "To-Do List App",
      description:
        "Created a simple to-do list app using HTML for structure, CSS for styling, and JavaScript for interactive task management.",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Music Player",
      description:
        "Built a music player app with HTML for layout, CSS for styling, and JavaScript to play, pause, and manage tracks.",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 bg-gray-800/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
        hidden: {},
      }}
    >
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-blue-400 pb-2">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
