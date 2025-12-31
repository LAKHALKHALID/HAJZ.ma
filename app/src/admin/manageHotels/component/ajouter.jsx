import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels, postHotel, putHotel } from "../../../slices/sliceHotel";
import { useNavigate, useParams } from "react-router-dom";


function AjouterHotel() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const navigate = useNavigate()
  const {id} = useParams()
  const [infoHotel,setInfoHotel]=useState({id:'',Nom_Hotel:'',Description:'',Ville:''})
  const data = useSelector(st => st.hotel.Hotels)

  const txtId=useRef()
  const txtName=useRef()
  const txtVille=useRef()
  const txtDescription=useRef()
  const txtImg1=useRef()
  const txtImg2=useRef()
  const txtImg3=useRef()


  const handlerAjouter=()=>{
    
    
    
    if(btn === 'Ajouter'){
      let hotel={
        id: txtId.current.value,
        Nom_Hotel: txtName.current.value,
        Description: txtDescription.current.value,
        Ville: txtVille.current.value,
        Image: [txtImg1.current.files[0].name, txtImg2.current.files[0].name, txtImg3.current.files[0].name],
        Commentaires: [],
        Like: 0,
        Dislike: 0
      }
      dispatch(postHotel(hotel))
    }
    else{
      let hotel={
        id: txtId.current.value,
        Nom_Hotel: txtName.current.value,
        Description: txtDescription.current.value,
        Ville: txtVille.current.value,
        Image: [txtImg1.current.files[0].name, txtImg2.current.files[0].name, txtImg3.current.files[0].name],
        Commentaires:infoHotel.Commentaires ,
        Like: infoHotel.Like,
        Dislike: infoHotel.Dislike
      }
      dispatch(putHotel(hotel))
    }
    setBtn('Ajouter')
    navigate('/manageHotels')
    
  }
  useEffect(function(){
    if(id){
      let db = data.find(h =>h.id === id)
      setInfoHotel(db)
      setBtn('Update')

    }
    dispatch(getHotels())
  },[dispatch])
  console.log(data)
  return ( 
    <>
    
    <form className="d-flex flex-column gap-2  w-50 mx-auto mt-2 mb-5">

      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">#ID : </label>
          <input ref={txtId} defaultValue={infoHotel.id} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Name : </label>
          <input ref={txtName} defaultValue={infoHotel.Nom_Hotel }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Ville : </label>
          <input ref={txtVille} defaultValue={infoHotel.Ville} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Description : </label>
          <textarea ref={txtDescription} defaultValue={infoHotel.Description} className="form-control"></textarea>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Image 1</label>
        <input ref={txtImg1} type="file" className="form-control" id="inputGroupFile01"/>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Image 2</label>
        <input  ref={txtImg2} type="file" className="form-control" id="inputGroupFile01"/>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Image 3</label>
        <input ref={txtImg3} type="file" className="form-control" id="inputGroupFile01"/>
      </div>
      <div>
        <input type="button" onClick={handlerAjouter} value={btn} className="btn btn-primary" />
      </div>

    </form>
    
    </>
  );
}

export default AjouterHotel;