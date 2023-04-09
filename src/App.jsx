import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'

import Dentistas from './components/pages/dentistas/Dentistas'
import DentistasFavoritos from './components/pages/dentistasFavoritos/DentistasFavoritos'
import Navbar from './components/layout/navbar/Navbar'
import CartContextReducerDentistasProvaider from './context/CartContextReducerDentistas'
import DentistaSeleccionado from './components/pages/dentistaSeleccionado/DentistaSeleccionado'
import Contacto from './components/pages/contacto/Contacto'
import Home from './components/pages/home/Home'


function App() {


  return (

   
<BrowserRouter>

   <CartContextReducerDentistasProvaider>
     <Routes>
        <Route element={<Navbar/>}>
          
                    <Route path="/" element={<Home/>} />

                    <Route path="/dentistas" element={<Dentistas/>} />
                    
                    <Route  path="/dentista/:id" element={<DentistaSeleccionado/>} />
                    <Route  path="/contacto" element={<Contacto/>} />
                    <Route  path="/Favoritos" element={<DentistasFavoritos/>} />
         
        </Route>
        <Route path="*" element={<h1>No existe la pagina</h1>} />
     </Routes>
   </CartContextReducerDentistasProvaider>
     
       
   </BrowserRouter>

   
   





  )
}

export default App
