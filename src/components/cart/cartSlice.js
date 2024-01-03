import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, actions) => {
      // action to add new item and increase quantity one by one
      const newItem = actions.payload;
      //checking for alreday existed item in cart
      const existingItem = state.itemList.find(
        (oldItem) => oldItem.id === newItem.id
      );
      if (existingItem) {
        //if item alreday exists in cart
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.images[0],
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, actions) => { // action to reduce quantity of item one by one in cart
      const id = actions.payload;
      const itemToRemove = state.itemList.find((item) => item.id === id);
      if (itemToRemove.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        itemToRemove.quantity--;
        state.totalPrice -= itemToRemove.price;
        itemToRemove.totalPrice -= itemToRemove.price;
      }
    },
    deleteItemFromCart: (state, actions) => { // action to completely remove item from cart
      const id = actions.payload;
      const itemToRemove = state.itemList.find((item) => item.id === id);
      state.itemList = state.itemList.filter((item) => item.id !== id);
      state.totalQuantity -= 1;
      state.totalPrice -= itemToRemove.totalPrice;
    },
    setTotalPrice: (state, actions) => {
      state.totalPrice = actions.payload.totalPrice;
    },
  },
});

// to select all the current cart items 
export const selectAllCartItems = (state) => state.cart.itemList;

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
