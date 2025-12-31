import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCar } from "../../../slices/sliceCar";

function TbodyCars ({info}) {
  const dispatch = useDispatch()
  const handlerDelete=(c)=>{
    
    if(window.confirm('Are you sure !')){
      dispatch(deleteCar(c))
    }
  }
  return ( 
    <>
    <tr>
      <td>{info.id}</td>
      <td>{info.brand}</td>
      <td>{info.model}</td>
      <td>{info.pickupLocation}</td>
      <td>{}
        <img src={"./imgcars/"+info.image} alt="" style={{width:"40px",height:"40px"}} />
      </td>

      <td>
        <Link to={'/ajouterCar/'+info.id} className="btn btn-success me-2">Edit</Link>
        <button className="btn btn-danger" onClick={()=>handlerDelete(info)}>Delete</button>
      </td>

    </tr>
    </>
  );
}

export default TbodyCars ;