

function Vole({info}) {
  return ( 
    <>
      <div className="card w-50 mx-auto">
        <h5 className="card-header">{info.flightName}</h5>
        <div className="card-body">
          <div className="row">
                  <div className="col-8">
                    <h5 className="card-title text-dark">{info.DateDepart.split(" ")[0]} </h5>
                    <h5 className="card-title text-dark">{info.DateDepart.split(" ")[1]} </h5>

                    <p className="card-text text-dark">{info.description}</p>
                </div>
                <div className="col-4"></div>
          </div>
          
          
          
        </div>
      </div>
    </> 
  );
}

export default Vole;