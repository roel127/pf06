import { configureStore } from "@reduxjs/toolkit";
import user from './redux/User';

const store = configureStore({
  reducer :{
    cart: user.reducer
  }
})

export default store;