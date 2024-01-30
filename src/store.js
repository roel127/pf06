import { configureStore } from "@reduxjs/toolkit";
import user from './redux/User';
import log from "./redux/Log";

const store = configureStore({
  reducer :{
    cart: user.reducer,
    login: log.reducer
  }
})

export default store;