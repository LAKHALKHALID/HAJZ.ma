import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getCars, postCar, putCar } from "../../../slices/sliceCar";
import { useNavigate, useParams } from "react-router-dom";


function AjouterCar() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const [img,setImg]=useState('')
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
    }
  }
}, [id, data])


  console.log(data);
  
  
  return ( 
    <>
    
    <form className="d-flex flex-column gap-2  w-50 mx-auto mt-2 mb-5">

      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">#ID : </label>
          <input ref={txtId} defaultValue={infoCar.id} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Brand : </label>
          <input ref={txtBrand} defaultValue={infoCar.brand }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Model : </label>
          <input ref={txtModel} defaultValue={infoCar.model }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Prce per Day : </label>
          <input ref={txtPrice} defaultValue={infoCar.pricePerDay }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Location : </label>
          <input ref={txtLocation} defaultValue={infoCar.pickupLocation} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Description : </label>
          <textarea ref={txtDescription} defaultValue={infoCar.description} className="form-control"></textarea>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupFile01">Image </label>
        <input ref={txtImg} onChange={(e)=>setImg(e.target.files[0].name)} type="file" className="form-control" id="inputGroupFile01"/>
      </div>
      
      
      <div>
        <input type="button" onClick={handlerAjouter} value={btn} className="btn btn-primary" />
      </div>

    </form>
    
    </>
  );
}

export default AjouterCar;