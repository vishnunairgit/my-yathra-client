import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StuJobs from '../../StuJob/StuJobs/StuJobs'
import StuNav from '../../../Student/StuHome/StuNav/StuNav'
import ApplyJobs from '../../StuJob/StuApplyJob/ApplyJobs'
// import Notifications from '../../../Notifications/Notifications'

function StuHome() {
  return (
    <div>
      <StuNav />
      <div>
        <Routes>
            < Route path='/' element={< StuJobs />} />
            <Route path='/ApplyJob/:jobId' element={<ApplyJobs />} />
            {/* <Route path='/Notifications' element={<Notifications />} /> */}
            </Routes>
      </div>
    </div>
  )
}

export default StuHome

