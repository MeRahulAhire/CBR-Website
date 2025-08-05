import {Routes, Route} from 'react-router-dom'
import Home from './component/home'
import Success from './component/Success'
import './App.css'

function App() {
 

  return (
    <>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
    </>
  )
}

export default App
