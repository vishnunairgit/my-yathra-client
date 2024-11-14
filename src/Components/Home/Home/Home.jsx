import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AdminAuth } from '../../../Authorization/Authorization';

import Mycompany from '../../User/MyCompany/Mycompany';
import AddTrips from '../../trips/Add Trip/AddTrips';
import AllTrip from '../../trips/AllTripPackage/AllTrip';
import ViewCompnay from '../../User/CompanyView/ViewCompnay';
import EditCompany from '../../User/CompanyEdit/EditCompany';
import UpdatePassword from '../../User/CompanyEdit/UpdatePassword/UpdatePassword';
import UpdateTrip from '../../trips/Update Trip/UpdateTrip';

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route element={<AdminAuth />}>
            < Route path='/Home' element={< Mycompany />} />
            < Route path='/AddTrips' element={< AddTrips />} />
            < Route path='/AllTrip' element={< AllTrip />} />
            <Route path="/UpdateTrip/:tripId" element={<UpdateTrip />} />



            < Route path='/ViewCompnay' element={< ViewCompnay />} />
            < Route path='/EditCompany/:userId' element={<EditCompany />} />
            < Route path='/EditCompany/:userId/Updatepassword' element={< UpdatePassword />} />


            {/* < Route path='/EditJob/:jobId' element={< EditJob />} /> */}
            {/* < Route path='/UserView' element={<UserView />} /> */}
            < Route path='/Mycompany' element={<Mycompany />} />
            {/* < Route path='/UserEdit/:userId' element={<UserEdit />} /> */}
            {/* < Route path='/UserEdit/:userId/Updatepassword' element={< Updatepassword />} /> */}
            {/* < Route path='/Notifications' element={< Notifications />} /> */}


          </Route  >
        </Routes>
      </div>
    </div>
  )
}

export default Home