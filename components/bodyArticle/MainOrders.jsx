import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Container from "../layout/Container";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";

const contentVariant = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    y: -50,
  },
};

const childContent = {
  show: {
    x: 0,
    opacity: 1,
  },

  hidden: {
    x: 50,
    opacity: 0,
  },
};

const MainOrders = () => {
  const { toppings } = useSelector((state) => state.dataSlice.setPizza);
  const { selectCategory } = useSelector((state) => state.dataSlice.setPizza);

  return (
    <Fragment>
      <Modal>Want to make another pizza?</Modal>

      <Navbar>Orders</Navbar>
      <Container
        className="h-screen flex items-center justify-center -mt-12 
      p-7"
      >
        <motion.article
          variants={contentVariant}
          initial="hidden"
          animate="show"
          className="text-2xl text-white text-center"
        >
          <h1 className="font-normal text-3xl ">Thanks you for orders :)</h1>
          <p className="my-4">You ordered a {selectCategory.name}:</p>

          <ul className=" font-light text-2xl">
            {toppings.map((item, idx) => (
              <motion.li variants={childContent} key={idx}>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.article>
      </Container>
    </Fragment>
  );
};

export default MainOrders;
