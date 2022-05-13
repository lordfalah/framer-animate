import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCategory: [
    { id: 1, name: "Clasic" },
    { id: 2, name: "Thin & Crispy" },
    { id: 3, name: "Thick Crust" },
  ],

  dataToppings: [
    "mushrooms",
    "peppers",
    "onnions",
    "alives",
    "extra cheese",
    "tomatoes",
  ],

  setPizza: {
    toppings: [],
    selectCategory: {},
  },
};

const sliceData = createSlice({
  name: "data",
  initialState,

  reducers: {
    selectCategoryData: (state, { payload }) => {
      if (Object.keys(payload).length === 0) {
        state.setPizza.selectCategory = {};
      } else {
        state.setPizza.selectCategory = {
          ...state.setPizza.selectCategory,
          id: payload.id ? payload.id : "",
          name: payload.name ? payload.name : "",
        };
      }
    },

    addTopping: (state, { payload }) => {
      let newToppings;
      if (!state.setPizza.toppings.includes(payload)) {
        newToppings = [...state.setPizza.toppings, payload];
      } else {
        newToppings = state.setPizza.toppings.filter(
          (items) => items !== payload
        );
      }

      if (payload.length > 0) {
        state.setPizza.toppings = newToppings;
      } else {
        state.setPizza.toppings = [];
      }
    },
  },
});

export const {
  selectCategoryData,
  changeToppingsData,
  selectToppingsData,
  addTopping,
} = sliceData.actions;
export default sliceData;
