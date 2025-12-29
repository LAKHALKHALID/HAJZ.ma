import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  Users:[],
  rol:"user",
}

export const getUsers=createAsyncThunk(
  "user/getUsers",
  async()=>{
    return await axios.get('http://localhost:8000/users')
    .then(res=>res.data)
  }
)

const sliceUser = createSlice({
  name:'user',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getUsers.fulfilled,(st,act)=>{ st.Users=act.payload})
  }
})

export default sliceUser.reducer