import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  Cars:[]
}

export const getCars=createAsyncThunk(
  "car/getCars",
  async()=>{
    return await axios.get('http://localhost:8000/cars')
    .then(res=>res.data)
  }
)

const sliceVole = createSlice({
  name:'car',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getCars.fulfilled,(st,act)=>{ st.Cars=act.payload})
  }
})

export default sliceVole.reducer