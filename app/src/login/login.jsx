import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers ,changeRol } from "../slices/sliceuser";
import { useNavigate } from "react-router-dom";


function Login() {
  const txtEmail = useRef()
  const txtPass = useRef()
  const frm = useRef()
  const navigate = useNavigate()


  const userData= useSelector(st=>st.user.Users)
  const dispatch = useDispatch()
  const login = ()=>{

    let Email    = txtEmail.current.value;
    let pass = txtPass.current.value;
    let db = userData.filter( u => u.email === Email & u.password === pass)
    dispatch(changeRol(db[0 ].rol))
    if(db.length===1){
        navigate('/manageUsers')
    }
    frm.current.reset()
  }

  useEffect(function(){
    dispatch(getUsers())
  },[])

  return ( 
    // <div className="bg-light py-5">
    // <form ref={frm} className="mx-auto mt-5 d-flex flex-column gap-3 w-25">
    //     <input ref={txtEmail} type="email" className="form-control form-control-lg" />
    //     <input ref={txtPass} type="password" className="form-control form-control-lg" />
    //     <input onClick={login} type="button" className="btn btn-primary" value={"Login"} />
    // </form>
    // <br/>
    // <br/>
    // <br/>
    // <br/>

    
    // </div>
    <div className="bg-light min-vh-100 d-flex align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-4">
        
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-body p-5">

            <h2 className="text-center fw-bold mb-3">Login</h2>
            <p className="text-center text-muted mb-4">
              Please sign in to your account
            </p>

            <form ref={frm} className="d-flex flex-column gap-3">

              <div className="form-floating">
                <input
                  ref={txtEmail}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
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