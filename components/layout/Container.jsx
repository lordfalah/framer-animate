import React from "react";
import { motion } from "framer-motion";

const Container = ({ children, ...props }) => {
  return (
    <motion.div className={`container mx-auto ${props.className}`} {...props}>
      {children}
    </motion.div>
  );
};

export default Container;
