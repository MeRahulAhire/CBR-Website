import {Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Success from './component/Success'
import './App.css'
import TnC from './component/TnC'

function App() {
 

  return (
    <>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tnc" element={<TnC />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </>
  )
}

export default App
