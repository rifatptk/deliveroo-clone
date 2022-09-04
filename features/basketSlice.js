import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as it is not in basket.`
        );
      }
      state.items = newBasket;
    },
  },
});

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemWithID = (state, id) =>
  state.basket.items.filter((itm) => itm.id === id);

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
