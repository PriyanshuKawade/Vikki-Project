import logo from './logo.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create'  
import Read from './Read'
import Homee from './Homee'
import Update from './Update'


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homee/>}/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/read/:id' element={<Read/>}/>
    <Route path='/edit/:id' element={<Update/>}/>


    
    </Routes>
    </BrowserRouter>

    )

}

export default App
