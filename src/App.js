import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing/Landing';
import Home from './Components/Home/Home/Home';
import StuHome from './Components/Student/StuHome/StuHome/StuHome';
// import { useEffect } from 'react';
// import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployerLogin from './Components/Landing/Employer Login/EmployerLogin';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Home />} />
            <Route path='EmployerLogin' element={<EmployerLogin/>} />


            {/* <Route path="/student/*" element={<StuHome />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
