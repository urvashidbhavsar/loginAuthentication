import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [userdetails, setUserdetails] = useState(null);

  useEffect(() => {
    const fetchuserdata = async () => {
      const user = auth.currentUser; // Get the authenticated user

      if (user) {
        const userref = doc(db, "users", user.uid); // Use user.uid instead of user.id
        const docsnap = await getDoc(userref);

        if (docsnap.exists()) {
          setUserdetails(docsnap.data());
          console.log(docsnap.data());
        }
      }
    };
    fetchuserdata();
  }, []); // Empty dependency array to run only once

  const logout = async () => {
    try {
      await auth.signOut();
      navigate("/")
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='w-50 m-auto mt-5 p-3 shadow text-center'>
      {userdetails ? (
        <h1 className='text-center'>Welcome {userdetails.firstname}</h1>
      ) : (
        <p>Loading ...</p>
      )}

      <button className='btn btn-outline-danger' onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
