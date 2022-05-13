import { AnimatePresence, motion } from "framer-motion";
import { Provider } from "react-redux";
import store from "../dataStore/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        // key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-100vw" }}
      >
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
