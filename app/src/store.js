import { configureStore } from "@reduxjs/toolkit";
import sliceHotel from './slices/sliceHotel'
import  sliceVole  from "./slices/sliceVole";
import sliceCars from "./slices/sliceCar"
import sliceUser from "./slices/sliceuser"


export const store = configureStore({
  reducer:{
    hotel:sliceHotel,
    vole:sliceVole,
    car:sliceCars,
    user:sliceUser
  }
})

