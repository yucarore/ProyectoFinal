import React, { useContext} from 'react'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'
import "./DentistasFavoritos.css";


const DentistasFavoritos = () => {

    const {state,dispatch} = useContext(CartContextReducerDentistas)


    

  return (
    <div id='contenedorListadoDeDentistasFavoritos'>
        <p id='tituloDentistasFavoritos'> DENTISTAS FAVORITOS</p>
        {/* <ul>
            {
               state.dentistasFavoritos.map(item => (
                   <li key={item.id}>
                       {item.name}
                       <button  onClick={()=>dispatch({type: "BORRAR_DENTISTA_FAVORITO_SELECCIONADO",payload: item.id }) } >Quitar</button>
                  </li>
               ))
            }
        </ul>
        <button onClick={()=>dispatch({type: "BORRAR_LISTA_DENTISTAS_FAVORITOS" }) } >Limpiar</button> */}
        

        <table>
      <thead>
           <tr>
               <th>Nombre</th><th>Quitar</th>
           </tr>
      </thead>

      <tbody>
         {state.dentistasFavoritos.map(item => (                    
          <tr key={item.id}>                    

                    <td>
                      {item.name}  
                    </td>           
                    <td>
                    <button  id='botonQuitarDentistaFavoritos'  onClick={()=>dispatch({type: "BORRAR_DENTISTA_FAVORITO_SELECCIONADO",payload: item.id }) } >ok</button>
                    </td>              
                    
          </tr>
          
               ))
         }
         

      </tbody>

</table>
<button  id='botonLimpiarDentistaFavoritos' onClick={()=>dispatch({type: "BORRAR_LISTA_DENTISTAS_FAVORITOS" }) } >Limpiar</button>

    </div>
  )
}

export default DentistasFavoritos