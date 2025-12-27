import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import Hotels from '../user/hotels/listHotels'
const initialState={
  Hotels:[]
}

export const getHotels = createAsyncThunk(
  "hotel/getHotels",
  async()=>{
    return await axios.get('http://localhost:8000/hotels')
    .then(res=>res.data)
  }
)

const sliceHotel = createSlice({
  name:'hotel',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{
    builder.addCase(getHotels.fulfilled,(stat,act)=>{stat.Hotels=act.payload})
  }
})

export default sliceHotel.reducer