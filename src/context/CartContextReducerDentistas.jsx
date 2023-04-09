import React, { createContext, useReducer } from 'react'

export const CartContextReducerDentistas = createContext()




const initialState = {
    dentistas: [],
    isDark: false,
    dentistasFavoritos: [],
    dentista: {},
    favs:  JSON.parse(localStorage.getItem("favoritos")) || [],
}

const reducerDentistas = (state,action) =>{
switch (action.type){
    case "OBTENER_DENTISTAS":
        return {...state,dentistas: action.payload}
    case "OBTENER_DENTISTA_SELECCIONADO":
            return {...state,dentista: action.payload}
    case "CAMBIO_TEMA":
        return {...state,isDark: !state.isDark}
    case "GUARDAR_DENTISTAS_FAVORITOS":
        
        let storage = localStorage.setItem("favorito", JSON.stringify[state.dentistasFavoritos ] )

        let existe = state.dentistasFavoritos.some((elemento) => elemento.id === action.payload.id)
        if(existe){                       
            let nuevoArregloDentistasFavoritos = state.dentistasFavoritos.map((item) =>{
                if(item.id === action.payload.id){
                    return {
                        ...item
                    };
                }else{
                    return item
                }
            });
            return{...state, dentistasFavoritos:nuevoArregloDentistasFavoritos}
       }else{
            return {...state,dentistasFavoritos: [...state.dentistasFavoritos, action.payload]}
        }
        
    case "BORRAR_LISTA_DENTISTAS_FAVORITOS":
        return {...state,dentistasFavoritos: []}

    case "BORRAR_DENTISTA_FAVORITO_SELECCIONADO":
        let ArregloFiltradoDentistasFavoritos = state.dentistasFavoritos.filter(item => item.id !== action.payload)
        return {...state, dentistasFavoritos: ArregloFiltradoDentistasFavoritos}

        default:
            state;
}
}


const CartContextReducerDentistasProvaider = ({children}) => {

const [state,dispatch] = useReducer(reducerDentistas,initialState)


  return (
    <div>
         <CartContextReducerDentistas.Provider value={{state,dispatch}}>
          {children}
         </CartContextReducerDentistas.Provider>


    </div>
  )
}

export default CartContextReducerDentistasProvaider