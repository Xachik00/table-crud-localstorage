
import {  configureStore } from "@reduxjs/toolkit"
import UsersReducer from "../store/slice/AdduserSlice"

export const store = configureStore({
  reducer: {
    users: UsersReducer,
 
  }
})






















