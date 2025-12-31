import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers ,changeRol } from "../slices/sliceuser";


function Login() {
  const txtEmail = useRef()
  const txtPass = useRef()
  const frm = useRef()



  const userData= useSelector(st=>st.user.Users)
  const dispatch = useDispatch()
  const login = ()=>{

    let Email    = txtEmail.current.value;
    let pass = txtPass.current.value;
    let db = userData.filter( u => u.email === Email & u.password === pass)
    console.log(db[0].rol);
    dispatch(changeRol(db[0 ].rol))
    frm.current.reset()
  }

  useEffect(function(){
    dispatch(getUsers())
  },[])

  return ( 
    <div className="bg-light py-5">
    <form ref={frm} className="mx-auto mt-5 d-flex flex-column gap-3 w-25">
        <input ref={txtEmail} type="email" className="form-control form-control-lg" />
        <input ref={txtPass} type="password" className="form-control form-control-lg" />
        <input onClick={login} type="button" className="btn btn-primary" value={"Login"} />
    </form>
    <br/>
    <br/>
    <br/>
    <br/>

    
    </div>
  );
}

export default Login;