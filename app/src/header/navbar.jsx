import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold fs-3" >HAJZ.ma</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list ">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/vole' >Vols</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" >Cars</Link>
              </li>
              <li className="nav-item">
                <Link to={'/hotels'} className="nav-link" >Hotels</Link>
              </li>

            
              
            </ul>

            <div className='d-flex gap-3'>
              <button type="button" className="btn btn-outline-light">Login</button>
              <button type="button" className="btn btn-outline-light">Register</button>
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;