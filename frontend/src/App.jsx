import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'

function App() {
  const [authenticated, setAuthenticated] = useState(false)


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={authenticated ? <Home/> : <Auth/>} />
        </Routes>
      </Router>
    </>
  )
}


export default App
