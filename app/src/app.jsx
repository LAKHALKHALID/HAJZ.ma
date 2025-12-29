import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Navbar from './header/navbar';
import Hotels from './user/hotels/listHotels';
import Voles from './user/voles/main';
import ListCars from './user/cars/listCars';
import Login from './login/login';
function App() {
  return ( 
    <div className=''>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/vole' element={<Voles/>} />
        <Route path='/cars' element={<ListCars/>} />
        <Route path='/login' element={<Login/>} />
        


      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;