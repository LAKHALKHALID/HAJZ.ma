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

export const postCar = createAsyncThunk(
  "car/postCar",
  async(car)=>{
    return await axios.post('http://localhost:8000/cars',car)
    .then(res=>res.data)
  }
)
export const deleteCar = createAsyncThunk(
  "car/deleteCar",
  async(car)=>{
    await axios.delete('http://localhost:8000/cars/'+car.id)
    return car.id
  }
)

export const putCar = createAsyncThunk(
  "car/putCar",
  async(car)=>{
    return await axios.put('http://localhost:8000/cars/'+car.id,car)
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
          .addCase(postCar.fulfilled,(stat,act)=>{stat.Cars.push(act.payload)})
          .addCase(deleteCar.fulfilled,(st,act)=>{
                        let pos = st.Cars.findIndex(c=>c.id === act.payload)
                        st.Cars.splice(pos,1)
                      }
                  )
            .addCase(putCar.fulfilled,(st,act)=>{
              let pos = st.Cars.findIndex(c=>c.id === act.payload.id)
              st.Cars.splice(pos,1,act.payload)
              
            })
  }
})

export default sliceVole.reducer