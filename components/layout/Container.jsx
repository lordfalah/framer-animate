import React from "react";
import { motion } from "framer-motion";

const Container = ({ children, ...props }) => {
  return (
    <motion.div
      className={`container mx-auto h-screen flex items-center ${
        props.className ? props.className : ""
      } justify-center`}
    >
      {children}
    </motion.div>
  );
};

export default Container;
