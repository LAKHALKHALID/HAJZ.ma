import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../slices/sliceHotel";
import Hotel from "./hotel";

function Hotels() {
  const dispatch = useDispatch()
  const data = useSelector(st=>st.hotel.Hotels)
  
  useEffect(function(){

    dispatch(getHotels())

  },[dispatch])
  console.log(data);

  return ( 
    <div className="container">
    <h1 className="text-center">Page Hotels</h1>
      <div className="row">
        {data.map((h,i)=><Hotel key={i} data={h} />)}
      </div>
    </div>
  );
}

export default Hotels;