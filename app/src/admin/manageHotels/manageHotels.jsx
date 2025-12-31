import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../slices/sliceHotel";
import Tbody from "./component/tbody";
import './style.css';
function ManageHotels() {
  const data = useSelector(st=>st.hotel.Hotels)
  const dispatch = useDispatch()
  useEffect(function(){
    dispatch(getHotels())
  },[dispatch])
  console.log(data);
  
  return ( 

    <div className="container">
    <h1 className="text-center my-4 text-dark">Manage Hotels</h1>
    <Link to={"/ajouterHotel"} className="btn btn-primary mb-2">Ajouter</Link>
    <table className="table table-bordered text-center table-hover mb-4">
      <thead >
        <tr>
          <th>#ID</th>
          <th>Name</th>
          <th>Ville</th>
          <th>Description</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h,i)=> <Tbody key={i} info={h} />)}
      </tbody>
    </table>
    </div>
  );
}

export default ManageHotels;