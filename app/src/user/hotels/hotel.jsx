import Comment from './comment';
import './hotel.css'
function Hotel({data}) {
  return ( 
    <>
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card  h-100">
          <img src={"./imghotels/"+data.Image[0]} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title text-center"> {data.Nom_Hotel} </h5>
            <div className="card-text text-center"> {data.Description} </div>
            <hr />
            <div className="d-flex justify-content-between px-4">
              <span className="fw-bold"> Ville </span>
              <span> {data.Ville} </span>
            </div>
            <hr className="" />
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-chat-right-text-fill"></i>
              <p className="card-text"> {data.Commentaires[0]} </p>
            </div>
            <hr />
            <div className="pt-3 d-flex align-items-center gap-2">
              
              <span className='border border-1 rounded-pill py-2 px-4 border-primary '><i className="bi bi-hand-thumbs-up-fill" style={{cursor:"pointer"}}></i>  | {data.Like} </span>
              <span className='border border-1 rounded-pill py-2 px-4 border-danger'><i className="bi bi-hand-thumbs-down-fill" style={{cursor:"pointer"}}></i> | {data.Dislike} </span>
              <span className="btn btn-outline-primary"
              data-bs-toggle="modal" data-bs-target="#exampleModal"

              >comment</span>
            </div>
          </div>
      </div>
    </div>
    
    <Comment/>
    
    </>
  );
}

export default Hotel;