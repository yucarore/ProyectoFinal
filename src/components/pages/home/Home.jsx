import React from 'react'
import "./Home.css";
const Home = () => {

const imgFondo = "https://i.pinimg.com/736x/29/ce/31/29ce31b80aa33ad56186edc397ddd824.jpg"


  return (
    <div>
        
       
        
<img  id='imgFondo' src={imgFondo} />


<p id='bienvenido'>Bienvenido</p>
<p id='tituloHome' >Consultorio Odontologico <strong id='nombreDueña'>YUCARORE</strong></p>

    </div>
  )
}

export default Home