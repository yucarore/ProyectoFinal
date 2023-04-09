import React, { useState } from 'react'
import "./Contacto.css";


const Contacto = () => {



    const [error_1,setError_1] = useState(0)
    const [error_2,setError_2] = useState(0)
    const [error_3,setError_3] = useState(0)

    const [usuarios,setUsuarios] = useState({
        nombre: "",
        email: ""
    })
  

    const [validador_1,setValidador_1] = useState(0)
    const [validador_2,setValidador_2] = useState(0)
    const [validador_3,setValidador_3] = useState(0)




const handleChange = (e,propiedad) =>{
setUsuarios({...usuarios, [propiedad]: e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault()

    setValidador_1(0)
    setValidador_2(0)
    setValidador_3(0)

    setError_1(0) 
    setError_2(0)    
    setError_3(0)    


let validarNombre = `${usuarios.nombre}`
if(validarNombre.length < 5){
    
   setError_1(1)   
}else{
    
    setValidador_1(1)
  
}

const validarEmail_1 = usuarios.email.includes("@")
if(validarEmail_1){
    
    setValidador_2(1)

}else{
   
    setError_2(1) 
}

const validarEmail_2 = usuarios.email.includes(".")
if(validarEmail_2){
    
    setValidador_3(1)
   
}else{
   
    setError_3(1) 
}


}



  return (
    <div id='contenedorFormulario'>
    <p id='tituloContacto'>CONTACTO</p>
        
        <form onSubmit={handleSubmit}>
            <div id='nombre'>
            <input
             placeholder='Digite Nombre'
             name='nombre'
             onChange={(e)=> handleChange(e,"nombre")}
             />
            </div>

           <div id='email'>
           <input
             placeholder='Digite Email'
             name='email'
             onChange={(e)=> handleChange(e,"email")}
             />
           </div>

                 <button id='botonEnviar'>Enviar</button>
        </form>

          




{
  error_1 === 1 || error_2 === 1 || error_3 === 1 ? 
  (<div className='mensajeError'>Por favor verifique su información nuevamente, especialemente @ y .</div>) 
  : 
  ("")
}




{
    validador_1 === 1 && validador_2 === 1 && validador_3 === 1 &&    
    (
    <div className='mensajeCorrecto'>            
     Gracias:<strong> {usuarios.nombre}</strong> te contactaremos cuanto antes via email.
      </div>
    )    
}






                  
            
    </div>
  )
}

export default Contacto