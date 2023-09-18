import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: []
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
    }
  }
})

export const {addToCart} = user.actions;
export default user;