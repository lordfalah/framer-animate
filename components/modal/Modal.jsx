import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonCmp from "../button/ButtonCmp";
import { motion, AnimatePresence } from "framer-motion";
import { updateModal } from "../../features/sliceModal";
import { useRouter } from "next/router";
import { addTopping, selectCategoryData } from "../../features/sliceData";

const backdrop = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.5,
    },
  },

  hidden: {
    opacity: 0,
  },

  exit: {
    opacity: 0,
    scale: 0,
  },
};

const modalVariant = {
  show: {
    opacity: 1,
    y: "40vh",
  },

  hidden: {
    opacity: 0,
    y: "-100vh",
  },
};

const Modal = ({ children }) => {
  const { setModal } = useSelector((state) => state.dataModal);
  const dataDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      dataDispatch(updateModal(true));
    }, 5000);
  }, [dataDispatch]);

  const handleAgain = () => {
    dataDispatch(selectCategoryData({}));
    dataDispatch(addTopping([]));
    dataDispatch(updateModal(false));
    router.push("/");
  };

  return (
    <Fragment>
      <AnimatePresence>
        {setModal && (
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute top-0 left-0 right-0 bottom-0 
            bg-black/80 z-10 overflow-x-hidden"
          >
            <motion.div
              variants={modalVariant}
              className="max-w-xl rounded-xl p-5 m-auto
            bg-white "
            >
              <article className="flex flex-col items-center">
                <p className="py-4 text-xl">{children}</p>
                <ButtonCmp
                  onClick={handleAgain}
                  type="button"
                  className="border-2 px-5 py-2"
                >
                  Start Again
                </ButtonCmp>
              </article>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Modal;
