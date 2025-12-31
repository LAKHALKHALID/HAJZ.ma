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
    alert(t)
    // let x = data.filter(v =>( v.AeroportDepart === d && v.AeroportArrivee === a ) ? v : 'khalid')
    let x = data.filter( v =>v.AeroportDepart === d & v.AeroportArrivee === a &  v.DateDepart.split(" ")[0] === t ? v:"")
    setSearsh(x)
    

    // setSearsh(x);
    
    
  }


  return (
    <>
    <div className='landing pb-5'>
    <div className='container'>
      <h1 className='fw-bold py-5 fs-1'>Find Your Perfect Flight  </h1>
      <p className=" fs-3 pb-5">Compare and book flights from hundreds of airlines worldwide.</p>
    </div>
    <form className='container d-flex gap-2 align-items-center'>
      <div className="row mx-auto">
        <div className="col-lg-4">
          <select ref={dipar} className="form-select form-select-lg mb-3" aria-label="Large select example">
              <option selected>Aeroport de Depart</option>
              {data.map((v,i)=><option key={i} value={v.AeroportDepart}>{v.AeroportDepart}</option>)}
          </select>
        </div>
        <div className="col-lg-4">
          <select ref={arive} className="form-select form-select-lg mb-3" aria-label="Large select example">
              <option selected>Aeroport de Arrivee</option>
              {data.map((v,i)=><option key={i} value={v.AeroportArrivee}>{v.AeroportArrivee}</option>)}

          </select>
        </div>
        <div  className="col-lg-3">
            <input type="date" ref={date} className='form-control' />
        </div>
        <div className="col-lg-1">
            <input type="button" onClick={afficher} className='btn btn-primary' value={'Searsh'} />
        </div>
      </div>
      
      
    </form>
    
    </div>
    <div className="mx-auto py-5">
        {data.map((v,i)=>    <Vole info={v} key={i} />)}
    </div>
    </>
  );
}

export default Voles;