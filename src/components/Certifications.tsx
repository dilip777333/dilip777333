import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Advanced Java Course",
      issuer: "MSME Technology Centre",
      description:
        "Completed an advanced course on Java programming, covering core concepts, object-oriented programming, and application development.",
      link: "https://drive.google.com/file/d/1935CkvnbGcqW_O82Mu-IiLtNGLiebynG/view?usp=drivesdk",
    },
    {
      title: "Summer Internship Program",
      issuer: "IBM",
      description:
        "Participated in IBM's summer internship program, gaining hands-on experience with industry-standard technologies and development practices.",
      link: "https://drive.google.com/file/d/19-qGjTR1wapU9H2OSxCDdPES6Rzuh3pZ/view?usp=drivesdk",
    },
    {
      title: "Web Development Internship",
      issuer: "AMPARO SECURE TECH",
      description:
        "Completed a 3-month internship focusing on web development technologies and best practices in a professional environment.",
      link: "https://drive.google.com/file/d/191dfMrgySJqOPBptzxH_dmxVMlETauBb/view?usp=drivesdk",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <span className="border-b-4 border-blue-400 pb-2">
            Certifications
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                {cert.title}
              </h3>
              <p className="text-gray-300 mb-4">{cert.issuer}</p>
              <p className="text-gray-400 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded transition duration-300"
              >
                Check
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
