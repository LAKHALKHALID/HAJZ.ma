import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, postUser, putUser } from "../../../slices/sliceuser";


function AjouterUser() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const navigate = useNavigate()
  const {id} = useParams()
  const data = useSelector(st => st.user.Users)

  const [infoUser,setInfoUser]=useState(
    {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rol: ''
    }
  )

  const txtId=useRef()
  const txtFirst=useRef()
  const txtLast=useRef()
  const txtEmail=useRef()
  const txtPass=useRef()
  const txtRol=useRef()
  

  const handlerAjouter=()=>{
    
    let user={
      id: txtId.current.value,
      firstName: txtFirst.current.value,
      lastName: txtLast.current.value,
      email: txtEmail.current.value,
      password: txtPass.current.value,
      rol: txtRol.current.value
        
      }
    
    if(btn === 'Ajouter'){
      
      dispatch(postUser(user))
    }
    else{
      
      dispatch(putUser(user))
    }
    setBtn('Ajouter')
    navigate('/manageUsers')
    
  }
  useEffect(function(){

    dispatch(getUsers())

  },[dispatch])

  useEffect(() => {
  if (id && data.length > 0) {
    const db = data.find(u => u.id === id)
    if (db) {
      setInfoUser(db)
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
          <input ref={txtId} defaultValue={infoUser.id} type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">First Name : </label>
          <input ref={txtFirst} defaultValue={infoUser.firstName }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Last Name : </label>
          <input ref={txtLast} defaultValue={infoUser.lastName }type="text" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Email : </label>
          <input ref={txtEmail} defaultValue={infoUser.email }type="email" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Password : </label>
          <input ref={txtPass} defaultValue={infoUser.password} type="password" className="form-control" />
      </div>
      <div className="d-flex flex-column gap-2">
          <label htmlFor="" className="fw-bold">Role : </label>
          <input ref={txtRol} type="text" defaultValue={infoUser.rol} className="form-control"/>
      </div>
      
      
      
      <div>
        <input type="button" onClick={handlerAjouter} value={btn} className="btn btn-primary" />
      </div>

    </form>
    
    </>
  );
}

export default AjouterUser;