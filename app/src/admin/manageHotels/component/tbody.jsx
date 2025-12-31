import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteHotel } from "../../../slices/sliceHotel";


function Tbody ({info}) {
  const dispatch = useDispatch()
  const handlerDelete=(h)=>{
    
    if(window.confirm('Are you sure !')){
      dispatch(deleteHotel(h))
    }
  }
  return ( 
    <>
    <tr>
      <td>{info.id}</td>
      <td>{info.Nom_Hotel}</td>
      <td>{info.Ville}</td>
      <td>{info.Description}</td>
      <td>{}
        <img src={"./imghotels/"+info.Image[0]} alt="" style={{width:"40px",height:"40px"}} />
      </td>

      <td>
        <Link to={'/ajouterHotel/'+info.id} className="btn btn-success me-2">Edit</Link>
        <button className="btn btn-danger" onClick={()=>handlerDelete(info)}>Delete</button>
      </td>

    </tr>
    </>
  );
}

export default Tbody ;