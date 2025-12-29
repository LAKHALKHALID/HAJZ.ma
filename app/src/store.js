import { configureStore } from "@reduxjs/toolkit";
import sliceHotel from './slices/sliceHotel'
import  sliceVole  from "./slices/sliceVole";

export const store = configureStore({
  reducer:{
    hotel:sliceHotel,
    vole:sliceVole,
  }
})

