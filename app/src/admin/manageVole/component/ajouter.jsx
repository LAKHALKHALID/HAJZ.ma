import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getVoles, postVole, putVole } from "../../../slices/sliceVole";
import { useNavigate, useParams } from "react-router-dom";


function AjouterVole() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const [img,setImg]=useState('')
  const navigate = useNavigate()
  const {id} = useParams()
  const [infoVole,setInfoVole]=useState(
    {
      NumVol: "",
      flightName: '',
      AeroportDepart: '',
      AeroportArrivee: '',
      DateDepart: '',
      duree: '',
      typeVol: '',
      price: '',
      description:'',
      id: ''
    }
  )
  const data = useSelector(st => st.vole.Voles)

  const txtId=useRef()
  const txtflight=useRef()
  const txtDepart=useRef()
  const txtArrivee=useRef()
  const txtDate=useRef()
  const txtDuree=useRef()
  const txtType=useRef()
  const txtPrice=useRef()
  const txtDescription=useRef()


  const handlerAjouter=()=>{
    
    let vole={
        id: txtId.current.value,
        flightName: txtflight.current.value,
        AeroportDepart: txtDepart.current.value,
        AeroportArrivee: txtArrivee.current.value,
        DateDepart: txtDate.current.value,
        duree: txtDuree.current.value,
        typeVol: txtType.current.value,
        price: txtPrice.current.value,
        description: txtDescription.current.value,

        
      }
    
    if(btn === 'Ajouter'){
      
      dispatch(postVole(vole))
    }
    else{
      
      dispatch(putVole(vole))
    }
    setBtn('Ajouter')
    navigate('/manageVols')
    
  }
  useEffect(function(){

    dispatch(getVoles())

  },[dispatch])

  useEffect(() => {
  if (id && data.length > 0) {
    const db = data.find(v => v.id === id)
    if (db) {
      setInfoVole(db)
      setBtn('Update')
    }
  }
}, [id, data])


  console.log(data);
  
  
  return ( 
    <>
    
    <form className="d-flex flex-column gap-2  w-50 mx-auto mt-2 mb-5">
      
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">#ID : </label>
          <input ref={txtId} defaultValue={infoVole.id} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">flight Name : </label>
          <input ref={txtflight} defaultValue={infoVole.flightName }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Aeroport Depart : </label>
          <input ref={txtDepart} defaultValue={infoVole.AeroportDepart }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Aeroport Arrivee : </label>
          <input ref={txtArrivee} defaultValue={infoVole.AeroportArrivee }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Date Depart : </label>
          <input ref={txtDate} defaultValue={infoVole.pricePerDay }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">duree : </label>
          <input ref={txtDuree} defaultValue={infoVole.duree} type="number" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">type Vole : </label>
          <input ref={txtType} defaultValue={infoVole.typeVol} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Description : </label>
          <textarea ref={txtDescription} defaultValue={infoVole.description} className="form-control"></textarea>
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Price : </label>
          <input ref={txtPrice} defaultValue={infoVole.price} type="number" className="form-control" />
      </div>
      
      
      
      <div>
        <input type="button" onClick={handlerAjouter} value={btn} className="btn btn-primary" />
      </div>

    </form>
    
    </>
  );
}

export default AjouterVole;