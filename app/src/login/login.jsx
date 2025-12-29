

function Login() {
  return ( 
    <div className="bg-light py-5">
    <form className="mx-auto mt-5 d-flex flex-column gap-3 w-25">
        <input type="email" className="form-control form-control-lg" />
        <input type="password" className="form-control form-control-lg" />
        <input type="button" className="btn btn-primary" value={"Login"} />
    </form>
    <br/>
    <br/>
    <br/>
    <br/>

    
    </div>
  );
}

export default Login;