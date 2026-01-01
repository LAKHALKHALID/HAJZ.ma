import './vole.css'

function Vole({info}) {
  return ( 
    <>
  <div className="col-lg-6 mb-4">
  <div className="card shadow-sm border-0 rounded-4 h-100">
    <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
      <h5 className="fw-bold mb-0">{info.flightName}</h5>
      <span className="badge bg-success"> {info.typeVol}</span>
    </div>
    <div className="card-body">
      <div className="row align-items-center">
        <div className="col-md-8">
          <p className="mb-1 text-muted">Departe</p>

          <h5 className="fw-semibold text-dark mb-0">{info.DateDepart.split(" ")[0]}</h5>
          <p className="text-muted mb-2">{info.DateDepart.split(" ")[1]}</p>
          <p className="text-dark mb-0">{info.description}</p>
        </div>
        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <p className="text-muted mb-1">Price</p>
          <h3 className="fw-bold text-success mb-3">{info.price} €</h3>
          <button className="btn btn-primary btn-md ">Book now</button>
        </div>

      </div>
    </div>

  </div>
</div>

    </> 
  );
}

export default Vole;