import { configureStore } from "@reduxjs/toolkit";
import sliceHotel from './slices/sliceHotel'

export const store = configureStore({
  reducer:{
    hotel:sliceHotel
  }
})

