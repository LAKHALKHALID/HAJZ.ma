import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers ,changeRol } from "../slices/sliceuser";
import { useNavigate } from "react-router-dom";


function Login() {
  const txtEmail = useRef()
  const txtPass = useRef()
  const frm = useRef()
  const navigate = useNavigate()
  const [error,setError]=useState(false)
  const [color,serColor]=useState('')
  const userData= useSelector(st=>st.user.Users)
  const dispatch = useDispatch()
  const login = ()=>{

    let Email    = txtEmail.current.value;
    let pass = txtPass.current.value;
    let db = userData.filter( u => u.email === Email & u.password === pass)
    if(db.length > 0 ){
        dispatch(changeRol(db[0 ].rol))
        navigate('/manageUsers')
        frm.current.reset()
    }
    else{
        setError(true)
        serColor('red')
        txtPass.current.value=''
    }
  }

  useEffect(function(){
    dispatch(getUsers())
  },[])

  return ( 
 
<div className="bg-light min-vh-100 d-flex align-items-center">
  <div className="container">
    {
      error ? <div class="alert alert-danger w-25 mx-auto text-center" role="alert">
        Email or Password not correct 
    </div>:''
    }
    
    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-4">
        
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">
            <h2 className="text-center fw-bold mb-3">Login</h2>
            <p className="text-center text-muted mb-4">Please sign in to your account</p>
            <form ref={frm} className="d-flex flex-column gap-3">
              <div className="form-floating">
                <input
                  ref={txtEmail}
                  type="email"
                  style={{color:color}}
                  className="form-control "
                  id="email"
                  placeholder="name@gmail.com"
                />
                <label htmlFor="email">Email address</label>
              </div>

              <div className="form-floating">
                <input
                  ref={txtPass}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                type="button"
                onClick={login}
                className="btn btn-primary btn-lg w-100 mt-3"
              >
                Login
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</div>

  );
}

export default Login;