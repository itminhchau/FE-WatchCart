import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showCart: false,
    itemCart: [],
    checkAddToCart: false,
  },
  reducers: {
    showMiniCart: (state) => {
      state.showCart = true;
    },
    hideMiniCart: (state) => {
      state.showCart = false;
    },
    changeWhenSentToCart: (state) => {
      state.checkAddToCart = !state.checkAddToCart;
    },
    // addTocart: (state, action) => {
    //   const newItem = action.payload;
    //   //{id,product,quantity}
    //   const index = state.itemCart.findIndex((x) => x.id === newItem.id);
    //   const imageValid = state.itemCart.findIndex(
    //     (item) => item.product.imageProduct.id === newItem.product.imageProduct.id
    //   );
    //   if (index >= 0 && imageValid >= 0) {
    //     state.itemCart[index].quantity += newItem.quantity;
    //   } else {
    //     state.itemCart.push(newItem);
    //   }
    // },
    // setQuantity: (state, action) => {
    //   const { id, quantity } = action.payload;
    //   const index = state.itemCart.findIndex((x) => x.id === id);
    //   if (index >= 0) {
    //     state.itemCart[index].quantity = quantity;
    //   }
    // },
    // removeItemCart: (state, action) => {
    //   const { id } = action.payload;
    //   state.itemCart = state.itemCart.filter((x) => x.id !== id);
    // },
  },
});

export const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart, changeWhenSentToCart } = actions;
export default reducer;
