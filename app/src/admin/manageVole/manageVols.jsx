
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TbodyVole from "./component/tbody";
import './style.css';
import { getVoles } from "../../slices/sliceVole";
function ManageVols() {
  const data = useSelector(st=>st.vole.Voles)
  const dispatch = useDispatch()
  useEffect(function(){
    dispatch(getVoles())
  },[dispatch])
  
  
  return ( 

    <div className="container">
    <h1 className="text-center my-4 text-dark">Manage Voles</h1>
    <Link to={"/ajouterVole"} className="btn btn-primary mb-2">Ajouter</Link>
    <table className="table table-bordered text-center table-hover mb-4">
      <thead >
        <tr>
          <th>#ID</th>
          <th>Depart</th>
          <th>Arrivee</th>
          <th>Date Depart</th>
          <th>price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h,i)=> <TbodyVole key={i} info={h} />)}
      </tbody>
    </table>
    </div>
  );
}

export default ManageVols;