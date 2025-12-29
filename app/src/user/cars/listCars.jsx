import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import { getCars } from '../../slices/sliceCar';
import Car from './car';


function ListCars() {
  const dispatch = useDispatch()
  const data = useSelector(st=>st.car.Cars)
  const [searsh,setSearsh]=useState([])

  const car = useRef()
  
  useEffect(function(){
    dispatch(getCars())
  },[dispatch])
  
  const afficher = ()=>{
    let d=car.current.value
    // let x = data.filter( v =>v.AeroportDepart === d & v.AeroportArrivee === a &  v.DateDepart.split(" ")[0] === t ? v:"")
    // setSearsh(x)
    let cars = data.filter(c => c.pickupLocation === d )
    console.log(cars);
    setSearsh(cars)
  
  }


  return (
    <>
    <div className='landing pb-5'>
    <div className='container'>
      <h1 className='fw-bold py-5 fs-1'>Find Your Perfect Cars  </h1>
      <p className=" fs-3 pb-5">Compare and book flights from hundreds of airlines worldwide.</p>
    </div>
    <form className='container d-flex gap-2 align-items-center justify-content-center mx-auto w-50'>
      
        
          <select ref={car} className="form-select form-select-lg mb-3" aria-label="Large select example">
              <option selected>Searsh about your cars</option>
              {data.map((c,i)=><option key={i} calue={c.pickupLocation}>{c.pickupLocation}</option>)}
          </select>
            <input type="button" onClick={afficher} className='btn btn-primary' value={'Searsh'} />
        
    
      
      
    </form>
    
    </div>
    <div className="row container mx-auto py-5">
        {searsh.map((c,i)=>    <Car data={c} key={i} />)}
    </div>
    </>
  );
}

export default ListCars;