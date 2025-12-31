import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TbodyUser from "./component/Tbody";
import './style.css';
import { getUsers } from "../../slices/sliceuser";
function ManageUsers() {
  const data = useSelector(st=>st.user.Users)
  const dispatch = useDispatch()
  useEffect(function(){
    dispatch(getUsers())
  },[dispatch])
  
  
  return ( 

    <div className="container">
    <h1 className="text-center my-4 text-dark">Manage Users</h1>
    <Link to={"/ajouterUser"} className="btn btn-primary mb-2">Ajouter</Link>
    <table className="table table-bordered text-center table-hover mb-4">
      <thead >
        <tr>
          <th>#ID</th>
          <th>first Name</th>
          <th>last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((h,i)=> <TbodyUser key={i} info={h} />)}
      </tbody>
    </table>
    </div>
  );
}

export default ManageUsers;