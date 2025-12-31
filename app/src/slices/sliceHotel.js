import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
// import Hotels from '../user/hotels/listHotels'
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

export const postHotel = createAsyncThunk(
  "hotel/postHotel",
  async(hotel)=>{
    return await axios.post('http://localhost:8000/hotels',hotel)
    .then(res=>res.data)
  }
)

export const deleteHotel = createAsyncThunk(
  "hotel/deleteHotel",
  async(hotel)=>{
    await axios.delete('http://localhost:8000/hotels/'+hotel.id)
    return hotel.id
  }
)

export const putHotel = createAsyncThunk(
  "hotel/putHotel",
  async(hotel)=>{
    return await axios.put('http://localhost:8000/hotels/'+hotel.id,hotel)
    .then(res=>res.data)
  }
)

const sliceHotel = createSlice({
  name:'hotel',
  initialState,
  reducers:{
    like:(st,act)=>{
      let pos = st.Hotels.findIndex(h=>h.IdHotel === act.payload.IdHotel)
      let newLike = act.payload.Like
      let plus = newLike+1
      st.Hotels.splice(pos,1,{...act.payload,Like:plus})
    },
    dislike:(st,act)=>{
      let pos = st.Hotels.findIndex(h=>h.IdHotel === act.payload.IdHotel)
      let newDislike = act.payload.Dislike
      let mines = newDislike+1
      st.Hotels.splice(pos,1,{...act.payload,Dislike:mines})

    },
    changeComment:(st,act)=>{
      let pos = st.Hotels.findIndex(h=>h.IdHotel === act.payload.data.IdHotel)
      let com = [act.payload.text,...act.payload.data.Commentaires]
      st.Hotels.splice(pos,1,{...act.payload.data,Commentaires:com})
      
    }
    



  },
  extraReducers:(builder)=>{
    builder.addCase(getHotels.fulfilled,(stat,act)=>{stat.Hotels=act.payload})
            .addCase(postHotel.fulfilled,(stat,act)=>{stat.Hotels.push(act.payload)})
            .addCase(deleteHotel.fulfilled,(st,act)=>{
              let pos = st.Hotels.findIndex(h=>h.id === act.payload)
              st.Hotels.splice(pos,1)
            }
            ).addCase(putHotel.fulfilled,(st,act)=>{
              let pos = st.Hotels.findIndex(h=>h.id === act.payload.id)
              st.Hotels.splice(pos,1,act.payload)
              
            })
  }
})
export const {like , dislike,changeComment}=sliceHotel.actions
export default sliceHotel.reducer