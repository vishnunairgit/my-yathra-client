import React, { useState } from 'react'
import Login from '../Login page/Login'
import Signup from '../Signup Page/Signup'
import LandingNav from '../Landing-Nav/LandingNav'

function EmployerLogin() {
  const [loginsignup, setloginsignup] = useState('Login')

  return (
    <div>
      <LandingNav />
      {loginsignup === 'Login' && <Login setloginsignup={setloginsignup} />}
      {loginsignup === 'Signup' && <Signup setloginsignup={setloginsignup} />}

    </div>
  )
}

export default EmployerLogin

