import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./storeSlices/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})