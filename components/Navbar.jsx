import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  hidden: {
    rotate: -180,
  },

  show: {
    transition: {
      duration: 2,
    },
    rotate: 0,
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },

  show: {
    opacity: 1,
    pathLength: 1,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};

const Navbar = ({ children }) => {
  return (
    <motion.nav
      className="p-8"
      initial={{ y: "-50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        duration: 1,
        type: "spring",
        stiffness: 500,
      }}
    >
      <ul className="flex gap-8">
        <li>
          <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="show"
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <motion.path
              variants={pathVariant}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </motion.svg>
        </li>
        <li className="w-full flex flex-col justify-center gap-2">
          <span className="text-white text-2xl">{children}</span>
          <hr className="border-slate-100/40" />
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
