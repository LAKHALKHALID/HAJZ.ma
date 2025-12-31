import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
  Users:[],
  rol:"admin",
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
    changeRol:(st,act)=>{ st.rol=act.payload}
  },
  extraReducers:(builder)=>{
    builder.addCase(getUsers.fulfilled,(st,act)=>{ st.Users=act.payload})
  }
})

export const {changeRol} = sliceUser.actions

export default sliceUser.reducer