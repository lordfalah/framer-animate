import React from "react";
import { motion } from "framer-motion";

const Arrow = (...props) => {
  return (
    <motion.svg
      initial={{ x: "-50px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150 }}
      xmlns="http://www.w3.org/2000/svg"
      className={`${props[0].className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </motion.svg>
  );
};

export default Arrow;
