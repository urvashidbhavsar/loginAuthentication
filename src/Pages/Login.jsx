import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/Home")
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className='loginformset'>
        <h2 className='text-center'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="row g-3">
            <div className="col-12">
              <input type="text" name="" className="form-control" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col-12">
              <input type="password" name="" className="form-control" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="col-12">
              <button className='btn btn-primary w-100'>Submit</button>
            </div>
            <div className="col-12">
              <p className='text-center'>New User? <Link to="/Register">Register</Link></p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
