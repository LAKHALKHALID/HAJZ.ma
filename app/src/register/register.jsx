import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postUser } from "../slices/sliceuser";

function Register() {
  const [etat, serEtat] = useState(false)
  const fName=useRef()
  const lName=useRef()
  const eml=useRef()
  const pass=useRef()
  const confirme=useRef()

  const dispatch=useDispatch()

  const handlerRegister = ()=>{
    let user = {
      firstName:fName.current.value,
      lastName:lName.current.value,
      email:eml.current.value,
      password:pass.current.value,
      rol:'user'
    }
    if(pass.current.value === confirme.current.value){
      dispatch(postUser(user))
      serEtat(true)
    }
  }

  return ( 
    <>
    {
      etat ?<div className="alert alert-success w-50 mx-auto mt-3" role="alert">
      Create new user successful
    </div>:''
    }
    
      <form className="p-4 border rounded shadow-sm bg-white w-50 mx-auto my-3" >
        <h3 className="text-center mb-4">Create Account</h3>

  <div className="row">
    <div className="col-md-6 mb-3">
      <label className="form-label">First Name</label>
      <input ref={fName} type="text" className="form-control" placeholder="Enter first name"/>
    </div>

    <div className="col-md-6 mb-3">
      <label className="form-label">Last Name</label>
      <input ref={lName} type="text" className="form-control" placeholder="Enter last name"/>
    </div>
  </div>

  <div className="mb-3">
    <label className="form-label">Email</label>
    <input ref={eml} type="email" className="form-control" placeholder="example@email.com"/>
  </div>

  <div className="mb-3">
    <label className="form-label">Password</label>
    <input ref={pass} type="password" className="form-control" placeholder="Enter password"/>
  </div>

  <div className="mb-4">
    <label className="form-label">Confirm Password</label>
    <input ref={confirme} type="password" className="form-control" placeholder="Confirm password"/>
  </div>

  <div className="d-grid">
    <button type="button" onClick={handlerRegister} className="btn btn-primary btn-lg">
      Sign In
    </button>
  </div>

  <p className="text-center mt-3 text-muted">
    Already have an account? <Link to={'/login'} className="text-decoration-none">Login</Link>
  </p>
</form>

    
    </>
  );
}

export default Register;