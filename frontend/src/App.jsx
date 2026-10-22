import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'
import useSocket from './hooks/useSocket'
import socket from './utils/socket'

function App() {
  // const [isAuthenticate, setIsAuthenticate] = useState(false)
const { isAuthenticate } = useSelector(
  (state) => state.users
);
console.log("auth :", isAuthenticate);
 

  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isAuthenticate ? <Home/> : <Auth/>} />
        </Routes>
      </Router>
    </>
  )
}


export default App
