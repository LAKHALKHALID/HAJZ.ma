import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Navbar from './header/navbar';
import Hotels from './user/hotels/listHotels';
import Voles from './user/voles/main';
import ListCars from './user/cars/listCars';
import Login from './login/login';
import ManageHotels from './admin/manageHotels/manageHotels';
import AjouterHotel from './admin/manageHotels/component/ajouter';
import ManageCars from './admin/manageCars/manageCars';
import AjouterCar from './admin/manageCars/component/ajouter';
import ManageVols from './admin/manageVole/manageVols';
import AjouterVole from './admin/manageVole/component/ajouter';
import ManageUsers from './admin/manageUsers/manageUsers';
import AjouterUser from './admin/manageUsers/component/ajouter';
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
        <Route path='/manageHotels' element={<ManageHotels/>} />
        <Route path='/ajouterHotel/' >
            <Route index element={<AjouterHotel/>}/>
            <Route path=':id' element={<AjouterHotel/>}  />
        </Route>

        <Route path='/manageCars' element={<ManageCars/>} />
        <Route path='/ajouterCar/' >
            <Route index element={<AjouterCar/>}/>
            <Route path=':id' element={<AjouterCar/>}  />
        </Route>

        <Route path='/manageVols' element={<ManageVols/>} />
        <Route path='/ajouterVole' element={<AjouterVole/>} />
        <Route path='/ajouterVole/' >
            <Route index element={<AjouterUser/>}/>
            <Route path=':id' element={<AjouterUser/>}  />
        </Route>

        <Route path='/manageUsers' element={<ManageUsers/>} />
        <Route path='/ajouterUser/' >
            <Route index element={<AjouterUser/>}/>
            <Route path=':id' element={<AjouterUser/>}  />
        </Route>
        

        


      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;