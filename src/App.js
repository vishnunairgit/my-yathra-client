import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing/Landing';
import Home from './Components/Home/Home/Home';
// import { useEffect } from 'react';
// import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployerLogin from './Components/Landing/Employer Login/EmployerLogin';
import About from './Components/Landing/About/About';
import WhyUs from './Components/Landing/Whyus/WhyUs';
import BookNow from './Components/Landing/Book Now/BookNow';
import Otherfacilities from './Components/Landing/OtherFacilities/Otherfacilities';
import Contact from './Components/Landing/HandleContact/Contact';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Home />} />
            <Route path='EmployerLogin' element={<EmployerLogin />} />
            <Route path='/About' element={< About />} />
            <Route path='/WhyUS' element={< WhyUs />} />
            <Route path='/BookNow' element={< BookNow />} />
            <Route path='/Otherfacilities'  element={<Otherfacilities/>}  />
            <Route path='Contact' element={< Contact/>}  />



            {/* <Route path="/student/*" element={<StuHome />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
