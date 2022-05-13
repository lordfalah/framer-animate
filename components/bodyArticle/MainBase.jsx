import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../layout/Container";
import Navbar from "../Navbar";
import Arrow from "../icon/Arrow";
import ButtonCmp from "../button/ButtonCmp";
import { selectCategoryData } from "../../features/sliceData";
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
      duration: 1,
    },
  },

  hidden: {
    opacity: 0,
    x: "-100vh",
  },

  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
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

const MainBase = () => {
  const { dataCategory } = useSelector((state) => state.dataSlice);
  const [radioBtn, setRadioBtn] = useState({});
  const dataDispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    dataDispatch(selectCategoryData({ name: radioBtn.name, id: radioBtn.id }));
    router.push("/toppings");
  };

  return (
    <Fragment>
      <Navbar>Base</Navbar>
      <Container
        className="h-screen flex items-center justify-center -mt-12 
      p-7"
      >
        <AnimatePresence>
          <motion.article
            variants={slideContent}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-2xl text-white"
          >
            <h1 className="font-normal text-3xl">Step 1: Choose Your Base</h1>

            <form onSubmit={handleSubmit}>
              <ul className="mt-5">
                {dataCategory.map((category) => (
                  <li key={category.id} className="my-4 list-none">
                    <motion.button
                      type="button"
                      variants={childSlide}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setRadioBtn(category)}
                      value={category.name}
                      id={category.id}
                      className="flex gap-5 items-center"
                    >
                      {radioBtn.id === category.id && (
                        <Arrow className="h-5 w-5" />
                      )}
                      {category.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
              {radioBtn.id ? (
                <ButtonCmp
                  type="submit"
                  className="border-2 py-2 px-10 mt-5"
                  variants={buttonVariant}
                  initial="hiddenBtn"
                  animate="showBtn"
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.3,
                  }}
                >
                  Next
                </ButtonCmp>
              ) : (
                ""
              )}
            </form>
          </motion.article>
        </AnimatePresence>
      </Container>
    </Fragment>
  );
};

export default MainBase;
