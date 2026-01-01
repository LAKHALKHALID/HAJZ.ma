import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../slices/sliceHotel";
import Hotel from "./hotel";
import Landing from "./landing";

function Hotels() {
  const dispatch = useDispatch()
  const data = useSelector(st=>st.hotel.Hotels)

  const [dataFilter,setDataFilter]=useState([])
  const searsh = useRef()
  
  useEffect(function(){

    dispatch(getHotels())

  },[dispatch])
  
  const afficher =()=>{
    let newData = data.filter(h=>h.Ville === searsh.current.value)
    setDataFilter(newData)
    searsh.current.value=''
  }

  return ( 
    <>
    <Landing afficher={afficher} sh={searsh} />
    
    <div className="container">
    <h1 className="text-center">Page Hotels</h1>
      <div className="row">
        {
        dataFilter.length === 0 ?data.map((h,i)=><Hotel key={i} data={h} />):dataFilter.map((h,i)=><Hotel key={i} data={h} />)
        }
      </div>
    </div>

    </>
  );
}

export default Hotels;