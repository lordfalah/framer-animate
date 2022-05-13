import { createSlice } from "@reduxjs/toolkit";

const sliceModal = createSlice({
  name: "modal",

  initialState: {
    setModal: false,
  },

  reducers: {
    updateModal: (state, { payload }) => {
      state.setModal = payload;
    },
  },
});

export const { updateModal } = sliceModal.actions;
export default sliceModal;
