import { useRouter } from "next/router";
import React from "react";
import ButtonCmp from "../button/ButtonCmp";
import Container from "../layout/Container";
import { motion } from "framer-motion";

const MainPage = () => {
  const router = useRouter();

  return (
    <Container>
      <motion.main
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-white flex flex-col items-center gap-7"
      >
        <h1 className="text-3xl font-medium">Welcome to Pizza Joint</h1>

        <ButtonCmp
          onClick={() => router.push("/base")}
          className="my-4 border-2 py-3 px-5"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.3,
          }}
        >
          Create Your Pizza
        </ButtonCmp>
      </motion.main>
    </Container>
  );
};

export default MainPage;
