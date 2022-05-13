import { configureStore } from "@reduxjs/toolkit";
import sliceData from "../features/sliceData";
import sliceModal from "../features/sliceModal";

const store = configureStore({
  reducer: {
    dataSlice: sliceData.reducer,
    dataModal: sliceModal.reducer,
  },
});

export default store;
