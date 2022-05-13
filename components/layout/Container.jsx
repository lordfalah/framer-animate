import React from "react";
import { motion } from "framer-motion";

const Container = ({ children, ...props }) => {
  return (
    <motion.div
      className={`container mx-auto h-screen flex items-center justify-center`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Container;
