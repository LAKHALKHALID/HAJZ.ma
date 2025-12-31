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
export const postVole = createAsyncThunk(
  "vole/postVole",
  async(car)=>{
    return await axios.post('http://localhost:8000/vols',car)
    .then(res=>res.data)
  }
)

export const deleteVole = createAsyncThunk(
  "vole/deleteVole",
  async(vole)=>{
    await axios.delete('http://localhost:8000/vols/'+vole.id)
    return vole.id
  }
)

export const putVole = createAsyncThunk(
  "vole/putVole",
  async(vole)=>{
    return await axios.put('http://localhost:8000/vols/'+vole.id,vole)
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
      .addCase(postVole.fulfilled,(stat,act)=>{stat.Voles.push(act.payload)})
                .addCase(deleteVole.fulfilled,(st,act)=>{
                              let pos = st.Voles.findIndex(c=>c.id === act.payload)
                              st.Voles.splice(pos,1)
                            }
                        )
                  .addCase(putVole.fulfilled,(st,act)=>{
                    let pos = st.Voles.findIndex(c=>c.id === act.payload.id)
                    st.Voles.splice(pos,1,act.payload)
                    
                  })
  }
})

export default sliceVole.reducer