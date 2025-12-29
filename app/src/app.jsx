import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Navbar from './header/navbar';
import Hotels from './user/hotels/listHotels';
import Voles from './user/voles/main';
function App() {
  return ( 
    <div className=''>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/hotels' element={<Hotels/>} />
        <Route path='/vole' element={<Voles/>} />

      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;