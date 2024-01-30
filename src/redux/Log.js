import { createSlice } from "@reduxjs/toolkit";

const log = createSlice({
  name: 'login',
  initialState: {
    initLog: {
      token: null,
      name: null
    },
  },
  reducers: {
    addToLog(state, action){
      state.initLog = action.payload
    },
    removeToLog(state){
      state.initLog = {token: null, name: null}
    }
  }
})

export const {addToLog, removeToLog} = log.actions;
export default log;