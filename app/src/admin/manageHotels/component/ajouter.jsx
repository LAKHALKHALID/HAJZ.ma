import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels, postHotel, putHotel } from "../../../slices/sliceHotel";
import { useNavigate, useParams } from "react-router-dom";


function AjouterHotel() {
  const dispatch = useDispatch()
  const [btn,setBtn]= useState('Ajouter')
  const navigate = useNavigate()
  const {id} = useParams()
  const [infoHotel,setInfoHotel]=useState({id:'',Nom_Hotel:'',Description:'',Ville:''})
  const data = useSelector(st => st.hotel.Hotels)

  const txtId=useRef()
  const txtName=useRef()
  const txtVille=useRef()
  const txtDescription=useRef()
  const txtImg1=useRef()
  const txtImg2=useRef()
  const txtImg3=useRef()


  const handlerAjouter=()=>{
    
    
    
    if(btn === 'Ajouter'){
      let hotel={
        // id: txtId.current.value,
        Nom_Hotel: txtName.current.value,
        Description: txtDescription.current.value,
        Ville: txtVille.current.value,
        Image: [txtImg1.current.files[0].name, txtImg2.current.files[0].name, txtImg3.current.files[0].name],
        Commentaires: [],
        Like: 0,
        Dislike: 0
      }
      dispatch(postHotel(hotel))
    }
    else{
      let hotel={
        id: txtId.current.value,
        Nom_Hotel: txtName.current.value,
        Description: txtDescription.current.value,
        Ville: txtVille.current.value,
        Image: [txtImg1.current.files[0].name, txtImg2.current.files[0].name, txtImg3.current.files[0].name],
        Commentaires:infoHotel.Commentaires ,
        Like: infoHotel.Like,
        Dislike: infoHotel.Dislike
      }
      dispatch(putHotel(hotel))
    }
    setBtn('Ajouter')
    navigate('/manageHotels')
    
  }
  useEffect(function(){
    if(id){
      let db = data.find(h =>h.id === id)
      setInfoHotel(db)
      setBtn('Update')

    }
    dispatch(getHotels())
  },[dispatch])
  console.log(data)
  return ( 
    <>
    <div className="container mb-5">
      <div className="card shadow-lg border-0 mt-4">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="mb-0">Hotel Information</h5>
        </div>

        <div className="card-body">
          <form className="row g-4">

            <div className="col-md-6">
              <label className="form-label fw-semibold">Hotel ID</label>
              <input
                ref={txtId}
                defaultValue={infoHotel.id}
                type="text"
                className="form-control"
                disabled
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Hotel Name</label>
              <input
                ref={txtName}
                defaultValue={infoHotel.Nom_Hotel}
                type="text"
                className="form-control"
                placeholder="Enter hotel name"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">City</label>
              <input
                ref={txtVille}
                defaultValue={infoHotel.Ville}
                type="text"
                className="form-control"
                placeholder="Enter city"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Description</label>
              <textarea
                ref={txtDescription}
                defaultValue={infoHotel.Description}
                className="form-control"
                rows="4"
                placeholder="Hotel description"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Image 1</label>
              <input ref={txtImg1} type="file" className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Image 2</label>
              <input ref={txtImg2} type="file" className="form-control" />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Image 3</label>
              <input ref={txtImg3} type="file" className="form-control" />
            </div>

            <div className="col-12 d-flex justify-content-end">
              <button
                type="button"
                onClick={handlerAjouter}
                className="btn btn-primary px-5"
              >
                {btn}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default AjouterHotel;