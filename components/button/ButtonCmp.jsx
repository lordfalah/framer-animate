import React from "react";
import { motion } from "framer-motion";

const ButtonCmp = ({ children, ...props }) => {
  return (
    <motion.button
      {...props}
      type={`${props.type}`}
      className={`rounded-full ${props.className}
      text-2xl font-light`}
      whileHover={{
        scale: 1.1,
        textShadow: "0 0 8px rgb(255, 255, 255)",
        boxShadow: "0 0 8px rgb(255, 255, 255)",
      }}
    >
      {children}
    </motion.button>
  );
};

export default ButtonCmp;
