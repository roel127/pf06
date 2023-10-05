import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
    checkProductIds: []
  },
  reducers:{
    addToCart(state, action){
      const add = {
        id: action.payload.id,
        brand: action.payload.brand,
        count: action.payload.count,
        times: new Date().getTime()
      }
      state.cartProductIds = [...state.cartProductIds, add];
    },
    removeToCart(state, action){
      state.cartProductIds = state.cartProductIds.filter(item=>(item.id !== action.payload));
    },
    allClear(state){
      state.cartProductIds = [];
    },
    checkedIds(state, action){
      state.checkProductIds = [...state.checkProductIds, action.payload];
    },
    unCheckedIds(state, action){
      state.checkProductIds = state.checkProductIds.filter(item=>item !== action.payload);
    }
  }
})

export const {addToCart, removeToCart, allClear, checkedIds, unCheckedIds} = user.actions;
export default user;