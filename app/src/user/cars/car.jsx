

function Car({data}) {
  return ( 

    <>
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow">
          <img src={"./imgcars/"+data.image} alt="" className="card-img-top" />
          <div className="card-body">

          </div>
      </div>


    </div>
    
    </>
  
);
}

export default Car;