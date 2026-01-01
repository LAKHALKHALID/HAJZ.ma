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
      <div className="container">

        <div className="card shadow-sm border-0 rounded-4 p-4 mx-auto" style={{ maxWidth: "700px" }}>
          <form className="row g-3 align-items-end justify-content-center">
            <div className="col-md-9">
              <select
                ref={car}
                className="form-select form-select-lg"
              >
                <option value="">
                  Search about your cars
                </option>

                {data.map((c, i) => (
                  <option key={i} value={c.pickupLocation}>
                    {c.pickupLocation}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3 d-grid">
              <button type="button" onClick={afficher} 
                className="btn btn-primary btn-lg">Search
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
    <div className="row container mx-auto py-5">
        {
        // data.map((c,i)=>    <Car data={c} key={i} />)
        searsh.length ===0 ?data.map((c,i)=>    <Car data={c} key={i} />): searsh.map((c,i)=><Car data={c} key={i} />)
        }
    </div>
    </>
  );
}

export default ListCars;