import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
          <Route element={<Register />} path='/Register'></Route>
          <Route element={<Home />} path='/Home'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
