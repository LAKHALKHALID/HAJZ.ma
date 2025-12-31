import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TbodyCars from "./component/Tbody";
import './style.css';
import { getCars } from "../../slices/sliceCar";
function ManageCars() {
  const data = useSelector(st=>st.car.Cars)
  const dispatch = useDispatch()
  useEffect(function(){
    dispatch(getCars())
  },[dispatch])
  
  
  return ( 

    <div className="container">
    <h1 className="text-center my-4 text-dark">Manage Cars</h1>
    <Link to={"/ajouterCar"} className="btn btn-primary mb-2">Ajouter</Link>
    <table className="table table-bordered text-center table-hover mb-4">
      <thead >
        <tr>
          <th>#ID</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Location</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h,i)=> <TbodyCars key={i} info={h} />)}
      </tbody>
    </table>
    </div>
  );
}

export default ManageCars;