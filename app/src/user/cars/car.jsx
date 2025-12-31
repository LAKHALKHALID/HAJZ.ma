

function Car({data}) {
  return ( 

    <>
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">
          <img src={"./imgcars/"+data.image} alt="" className="card-img-top" />
          <div className="card-body">
            <h4 className="card-title text-center">{data.brand}</h4>
            <p className="card-title"><span className="fw-bold">Model : </span>{data.model}</p>
            <p className="card-title">{data.description}</p>
            <p className="card-title"><span className="fw-bold">Price Per Day : </span> <span className="text-success fs-4">{data.pricePerDay}$</span> </p>

            <h6>Location : <span className="text-danger">{data.pickupLocation}</span> </h6>
            <button className="btn btn-primary">Booking Now</button>
          </div>
      </div>


    </div>
    
    </>
  
);
}

export default Car;