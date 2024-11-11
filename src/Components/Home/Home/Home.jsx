import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AdminAuth } from '../../../Authorization/Authorization';

import Mycompany from '../../User/MyCompany/Mycompany';
import AddTrips from '../../trips/Add Trip/AddTrips';
import AllTrip from '../../trips/AllTripPackage/AllTrip';
import ViewCompnay from '../../User/CompanyView/ViewCompnay';

// import AddJobs from '../../Jobs/Add Jobs/AddJobs';
// import Alljobs from '../../Jobs/All Jobs/AllJobs/Alljobs';
// import Jobview from '../../Jobs/Job view/Jobview';
// import EditJob from '../../Jobs/Job Edit/EditJob';
// import UserEdit from '../../User/UserEdit/UserEdit';
// import Updatepassword from '../../User/UserEdit/UpdateUserpassword/Updatepassword';
// import UserView from '../../User/UserView/UserView';
// import Notifications from '../../Notifications/Notifications';


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
            < Route path='/ViewCompnay' element={< ViewCompnay />} />
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