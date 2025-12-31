import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../../../slices/sliceuser";

function TbodyCars ({info}) {
  const dispatch = useDispatch()
  const handlerDelete=(c)=>{
    
    if(window.confirm('Are you sure !')){
      dispatch(deleteUser(c))
    }
  }
  return ( 
    <>
    <tr>
      <td>{info.id}</td>
      <td>{info.firstName}</td>
      <td>{info.lastName}</td>
      <td>{info.email}</td>
      <td>
        <Link to={'/ajouterUser/'+info.id} className="btn btn-success me-2">Edit</Link>
        <button className="btn btn-danger" onClick={()=>handlerDelete(info)}>Delete</button>
      </td>

    </tr>
    </>
  );
}

export default TbodyCars ;