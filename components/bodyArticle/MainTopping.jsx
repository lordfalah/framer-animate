import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../layout/Container";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import Arrow from "../icon/Arrow";
import { addTopping } from "../../features/sliceData";
import ButtonCmp from "../button/ButtonCmp";
import { useRouter } from "next/router";

const buttonVariant = {
  showBtn: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2.5,
      type: "spring",
      stiffness: 150,
    },
  },

  hiddenBtn: {
    x: "-100vw",
    opacity: 0,
  },
};

const slideContent = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    x: "-100vh",
  },
};

const childSlide = {
  show: {
    x: 0,
    opacity: 1,
  },

  hidden: {
    x: 100,
    opacity: 0,
  },
};

const MainTopping = () => {
  const router = useRouter();
  const { dataToppings } = useSelector((state) => state.dataSlice);
  const { toppings } = useSelector((state) => state.dataSlice.setPizza);

  const dataDispatch = useDispatch();
  const handleCheck = (topping, event) => {
    event.classList.toggle("active");

    dataDispatch(addTopping(topping));
  };

  const handleTopping = (e) => {
    e.preventDefault();
    router.push("/orders");
  };

  return (
    <Fragment>
      <Navbar>Toppings</Navbar>

      <Container className="p-7">
        <motion.div variants={slideContent} initial="hidden" animate="show">
          <form onSubmit={handleTopping} className="text-2xl text-white">
            <h1 className="font-normal text-3xl">
              Step 2: Choose Your Toppings
            </h1>

            <ul className="mt-5">
              {dataToppings.map((topping, idx) => (
                <li key={idx.toString()} className="my-4">
                  <motion.button
                    type="button"
                    variants={childSlide}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ opacity: 0.9, scale: 1.3 }}
                    onClick={(e) => handleCheck(topping, e.target)}
                    className="flex gap-5 items-center btn-act"
                  >
                    {toppings.map(
                      (item) =>
                        item === topping && (
                          <Arrow key={item} className="w-5 h-5" />
                        )
                    )}
                    {topping}
                  </motion.button>
                </li>
              ))}
            </ul>

            {toppings.length > 0 && (
              <ButtonCmp
                type="submit"
                className="border-2 py-2 px-8 my-7"
                initial="hiddenBtn"
                animate="showBtn"
                variants={buttonVariant}
              >
                Orders
              </ButtonCmp>
            )}
          </form>
        </motion.div>
      </Container>
    </Fragment>
  );
};

export default MainTopping;
