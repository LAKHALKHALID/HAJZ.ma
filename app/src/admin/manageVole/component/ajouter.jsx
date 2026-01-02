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
    <div className="container my-5">
    <div className="card shadow border-0">
      
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0 text-center"> Flight Information</h5>
      </div>

      <div className="card-body">
        <form className="row g-3">

          <div className="col-md-6">
            <label className="form-label fw-bold">#ID</label>
            <input
              ref={txtId}
              defaultValue={infoVole.id}
              type="text"
              className="form-control"
              disabled
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Flight Name</label>
            <input
              ref={txtflight}
              defaultValue={infoVole.flightName}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Aeroport Depart</label>
            <input
              ref={txtDepart}
              defaultValue={infoVole.AeroportDepart}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Aeroport Arrivee</label>
            <input
              ref={txtArrivee}
              defaultValue={infoVole.AeroportArrivee}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Date Depart</label>
            <input
              ref={txtDate}
              defaultValue={infoVole.dateDepart}
              type="datetime-local"
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Duration (h)</label>
            <input
              ref={txtDuree}
              defaultValue={infoVole.duree}
              type="number"
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label fw-bold">Type</label>
            <input
              ref={txtType}
              defaultValue={infoVole.typeVol}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-bold">Price ($)</label>
            <input
              ref={txtPrice}
              defaultValue={infoVole.price}
              type="number"
              className="form-control"
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-bold">Description</label>
            <textarea
              ref={txtDescription}
              defaultValue={infoVole.description}
              rows="3"
              className="form-control"
            ></textarea>
          </div>

          <div className="col-12 text-end mt-3">
            <button
              type="button"
              onClick={handlerAjouter}
              className="btn btn-primary px-5"
            >
              {btn}
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
    </>
  );
}

export default AjouterVole;