import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCars, postCar, putCar } from "../../../slices/sliceCar";
import { useNavigate, useParams } from "react-router-dom";


function AjouterCar() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const [img,setImg]=useState('')
  const [etat,setEtat]=useState(false)

  const navigate = useNavigate()
  const {id} = useParams()
  const [infoCar,setInfoCar]=useState({id:'',brand:'',Model:'',Location:'',pricePerDay:'',Description:'',pickupLocation:''})
  const data = useSelector(st => st.car.Cars)

  const txtId=useRef()
  const txtBrand=useRef()
  const txtModel=useRef()
  const txtDescription=useRef()
  const txtLocation=useRef()
  const txtImg=useRef()
  const txtPrice=useRef()

  const handlerAjouter=()=>{
    
    let car={
        id: txtId.current.value,
        brand: txtBrand.current.value,
        description: txtDescription.current.value,
        model: txtModel.current.value,
        // Image: txtImg.current.files[0].name,
        Image: img,
        pricePerDay: txtPrice.current.value,
        pickupLocation: txtLocation.current.value,
        
      }
    
    if(btn === 'Ajouter'){
      
      dispatch(postCar(car))
    }
    else{
      
      dispatch(putCar(car))
    }
    setBtn('Ajouter')
    navigate('/manageCars')
    
  }
  useEffect(function(){

    dispatch(getCars())

  },[dispatch])

  useEffect(() => {
  if (id && data.length > 0) {
    const db = data.find(c => c.id === id)
    if (db) {
      setInfoCar(db)
      setBtn('Update')
      setEtat(true)
    }
  }
}, [id, data])


  console.log(data);
  
  
  return ( 
    <>
    <div className="container mt-5 mb-5">
    <div className="card shadow-lg border-0 rounded-4">

      <div className="card-header bg-primary text-white text-center rounded-top-4">
        <h4 className="mb-0">Car Information</h4>
      </div>
      <div className="card-body p-4">
        <form className="row g-3">

          <div className="col-md-6">
            <label className="form-label fw-semibold">Car ID</label>
            <input
              ref={txtId}
              defaultValue={infoCar.id}
              type="text"
              className="form-control"
              disabled={etat}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Brand</label>
            <input
              ref={txtBrand}
              defaultValue={infoCar.brand}
              type="text"
              className="form-control"
              placeholder="Ex: Toyota"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Model</label>
            <input
              ref={txtModel}
              defaultValue={infoCar.model}
              type="text"
              className="form-control"
              placeholder="Ex: Corolla"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Price per Day ($)</label>
            <input
              ref={txtPrice}
              defaultValue={infoCar.pricePerDay}
              type="number"
              className="form-control"
              placeholder="Ex: 50"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Pickup Location</label>
            <input
              ref={txtLocation}
              defaultValue={infoCar.pickupLocation}
              type="text"
              className="form-control"
              placeholder="City / Airport"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold">Car Image</label>
            <input
              ref={txtImg}
              type="file"
              className="form-control"
              onChange={(e) => setImg(e.target.files[0].name)}
            />
          </div>

          <div className="col-12">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              ref={txtDescription}
              defaultValue={infoCar.description}
              className="form-control"
              rows="4"
              placeholder="Describe the car..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="col-12 text-end mt-4">
            <button
              type="button"
              onClick={handlerAjouter}
              className="btn btn-primary px-5 py-2 rounded-pill"
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

export default AjouterCar;