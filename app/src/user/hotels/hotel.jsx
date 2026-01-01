import { useDispatch } from 'react-redux';
import './hotel.css'
import { like ,dislike,changeComment} from '../../slices/sliceHotel';
import { useState } from 'react';
function Hotel({data}) {
  const [btn , setBtn]=useState('comment')
  const [display,setDisplay]=useState('none')
  const [text,setText]=useState('')
  const [num,setNum]=useState(0)
  const dispatch = useDispatch()

  const handlerLike= (data)=>{
    dispatch(like(data))
  }
  const handlerDislike= (data)=>{
    dispatch(dislike(data))
  }

  const comment = ()=>{
    if(btn === 'comment'){
      setDisplay('block')
      setBtn('Save')
    }
    else{
      setDisplay('none')
      setBtn('comment')
      dispatch(changeComment({data,text}))     
    }
    setText('')
    
  } 
  const changeLeft = ()=>{
      if(num === 0){
        setNum(2)
      }
      else{
        setNum(num-1)
      }
  }

  const changeRight = ()=>{
      if(num === 2){
        setNum(0)
      }
      else{
        setNum(num+1)
      }
  }

  return ( 
    <>
    <div className="col-md-6 col-lg-4 mb-4 box">
      <div className="card  h-100 shadow position-relative">
          <img src={"./imghotels/"+data.Image[num]} className="card-img-top img" alt="" />
          <div className='button '>
            <span onClick={changeLeft} className='text-light button_l'><i className="bi bi-chevron-left "></i></span>
            <span onClick={changeRight} className='text-light button_r'><i className="bi bi-chevron-right"></i></span>
          </div>
          <div className="card-body">
            <h5 className="card-title text-center"> {data.Nom_Hotel} </h5>
            <div className="card-text text-center"> {data.Description} </div>
            <hr />
            <div className="d-flex justify-content-between px-4">
              <span className="fw-bold"> Ville </span>
              <span> {data.Ville}  </span>
            </div>
            <hr/>
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-chat-right-text-fill"></i>
              <span className="card-text"> {data.Commentaires[0]} </span>
            </div>
            <hr />
            <form style={{display:display}}>
              <textarea value={text} onChange={(e)=>setText(e.target.value)} className='form-control'></textarea>
            </form>

            <div className="pt-3 d-flex align-items-center gap-2">
              
              <span className='border border-1 rounded-pill py-2 px-4 border-primary '><i onClick={()=>handlerLike(data)} className="bi bi-hand-thumbs-up-fill" style={{cursor:"pointer"}}></i>  | {data.Like} </span>
              <span className='border border-1 rounded-pill py-2 px-4 border-danger'><i onClick={()=>handlerDislike(data)}  className="bi bi-hand-thumbs-down-fill" style={{cursor:"pointer"}}></i> | {data.Dislike} </span>
              <span className="btn btn-outline-primary"
            
              onClick={()=>comment()}>{btn}</span>

            </div>
          </div>
      </div>
    </div>
    
    
    
    </>
  );
}

export default Hotel;