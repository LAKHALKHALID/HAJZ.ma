import './vole.css'

function Vole({info}) {
  return ( 
    <>
      <div className="card w-50 mx-auto mb-3">
        <h5 className="card-header">{info.flightName}</h5>
        <div className="card-body">
          <div className="row">
                  <div className="col-8">
                    <h5 className="card-title text-dark">{info.DateDepart.split(" ")[0]} </h5>
                    <h5 className="card-title text-dark">{info.DateDepart.split(" ")[1]} </h5>

                    <p className="card-text text-dark">{info.description}</p>
                </div>
                <div className="col-4 tiket">
                  <p className='fs-5 text-dark'>{info.typeVol}</p>
                  <h3 className="fw-bold mt-2"> {info.price} EURO</h3>
                  <button type="button" className="btn btn-primary">Booking</button>
                </div>
          </div>
          
          
          
        </div>
      </div>
    </> 
  );
}

export default Vole;