import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Cardapio from './pages/Cardapio.jsx'

function App(){
    return(
      <div>
        <Router>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cardapio' element={<Cardapio/>}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App