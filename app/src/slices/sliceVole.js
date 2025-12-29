import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  Voles:[]
}

export const getVoles=createAsyncThunk(
  "vole/getVoles",
  async()=>{
    return await axios.get('http://localhost:8000/vols')
    .then(res=>res.data)
  }
)

const sliceVole = createSlice({
  name:'vole',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getVoles.fulfilled,(st,act)=>{ st.Voles=act.payload})
  }
})

export default sliceVole.reducer