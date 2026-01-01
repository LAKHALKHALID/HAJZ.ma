import { useDispatch, useSelector } from 'react-redux';
import './main.css';
import { useEffect, useRef, useState } from 'react';
import { getVoles } from '../../slices/sliceVole';
import Vole from './vole';
function Voles() {
  const dispatch = useDispatch()
  const data = useSelector(st=>st.vole.Voles)
  const [searsh,setSearsh]=useState([])

  const dipar = useRef()
  const arive = useRef()
  const date = useRef()

  
  useEffect(function(){
    dispatch(getVoles())
  },[dispatch])
  
  const afficher = ()=>{
    let d=dipar.current.value
    let a=arive.current.value
    let t=date.current.value
    let x = data.filter( v =>v.AeroportDepart === d & v.AeroportArrivee === a &  v.DateDepart.split(" ")[0] === t ? v:"")
    setSearsh(x) 
  }


  return (
    <>
    <div className="landing py-5">
  
  <div className="container text-center mb-5">
    <h1 className="fw-bold display-5 mb-3">
      Find Your Perfect Flight
    </h1>
    <p className="fs-4 text-light">
      Compare and book flights from hundreds of airlines worldwide.
    </p>
  </div>
  <div className="container">
    <div className="card shadow-sm border-0 rounded-4 p-4 mx-auto">
      <form className="row g-3 align-items-end">
        <div className="col-lg-3">
          <label className="form-label fw-semibold">
            airport  Departe 
          </label>
          <select
            ref={dipar}
            className="form-select form-select-lg"
          >
          
            {data.map((v, i) => (
              <option key={i} value={v.AeroportDepart}>
                {v.AeroportDepart}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3">
          <label className="form-label fw-semibold">
            Arrival airport
          </label>
          <select
            ref={arive}
            className="form-select form-select-lg"
          >
          
            {data.map((v, i) => (
              <option key={i} value={v.AeroportArrivee}>
                {v.AeroportArrivee}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg-3">
          <label className="form-label fw-semibold">
            Departure date
          </label>
          <input
            type="date"
            ref={date}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-lg-3 d-grid">
          <button
            type="button"
            onClick={afficher}
            className="btn btn-primary btn-lg"
          >
            Search flights
          </button>
        </div>
      </form>
    </div>
  </div>

  
  
</div>
  <div className="container py-5">
    <div className="row ">
      {
      
      searsh.length > 0 ? searsh.map((v, i) => ( <Vole info={v} key={i} />)):<div class="alert alert-danger" role="alert">
  Sory we can't find any vol has this info
</div>
      }
    </div>
  </div>
    </>
  );
}

export default Voles;