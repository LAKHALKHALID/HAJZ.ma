import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteVole } from "../../../slices/sliceVole";

function TbodyVole ({info}) {
  const dispatch = useDispatch()
  const handlerDelete=(c)=>{
    
    if(window.confirm('Are you sure !')){
      dispatch(deleteVole(c))
    }
  }
  return ( 
    <>
    <tr>
      <td>{info.id}</td>
      <td>{info.AeroportDepart}</td>
      <td>{info.AeroportArrivee}</td>
      <td>{info.DateDepart}</td>
      <td> {info.price} </td>

      <td>
        <Link to={'/ajouterVole/'+info.id} className="btn btn-success me-2">Edit</Link>
        <button className="btn btn-danger" onClick={()=>handlerDelete(info)}>Delete</button>
      </td>

    </tr>
    </>
  );
}

export default TbodyVole ;