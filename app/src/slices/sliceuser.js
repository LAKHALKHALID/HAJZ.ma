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

export const postUser = createAsyncThunk(
  "user/postUser",
  async(user)=>{
    return await axios.post('http://localhost:8000/users',user)
    .then(res=>res.data)
  }
)

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async(user)=>{
    await axios.delete('http://localhost:8000/users/'+user.id)
    return user.id
  }
)

export const putUser = createAsyncThunk(
  "user/putUser",
  async(user)=>{
    return await axios.put('http://localhost:8000/users/'+user.id,user)
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
    .addCase(postUser.fulfilled,(stat,act)=>{stat.Users.push(act.payload)})
              .addCase(deleteUser.fulfilled,(st,act)=>{
                            let pos = st.Users.findIndex(c=>c.id === act.payload)
                            st.Users.splice(pos,1)
                          }
                      )
                .addCase(putUser.fulfilled,(st,act)=>{
                  let pos = st.Users.findIndex(c=>c.id === act.payload.id)
                  st.Users.splice(pos,1,act.payload)
                  
                })
  }
})

export const {changeRol} = sliceUser.actions

export default sliceUser.reducer