import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      className="bg-gray-900 py-6 text-center text-gray-500 text-sm border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Dilip Singh Bhati. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
