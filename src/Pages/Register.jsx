import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Register = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser; // Get the registered user
      console.log(user);

      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstname: fname,
          lastname: lname
        });
      }
      alert("User Register Successfully");
      setFname("")
      setLname("")
      setEmail("")
      setPassword("")
    } catch (e) {
      console.log(e);
      alert("email id already exist")
    }
  };

  return (
    <>
      <div className='loginformset'>
        <h2 className='text-center'>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="row g-3">
            <div className="col-12">
              <input type="text" name="" className="form-control" placeholder='Firstname' value={fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            <div className="col-12">
              <input type="text" name="" className="form-control" placeholder='Lastname' value={lname} onChange={(e) => setLname(e.target.value)} />
            </div>
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
              <p className='text-center'>Already have account? <Link to="/">Login</Link></p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
