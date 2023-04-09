import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContextReducerDentistas } from "../../../context/CartContextReducerDentistas";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(CartContextReducerDentistas);

  return (
    <div className={state.isDark ? "dark" : "light"}>
     
      <NavLink id="dentistas"  to="/dentistas"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")} 
      >
        Dentistas{" "}
      </NavLink>
     
      <NavLink  id="contacto"  to="/contacto"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")}         
      >
        Contacto{" "}
      </NavLink>
     
      <NavLink   id="favoritos"   to="/Favoritos"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")}
      >
        Favoritos{" "}
      </NavLink>
     

      <button  id="botonTema"  onClick={() => dispatch({ type: "CAMBIO_TEMA" })}>{state.isDark ? "Light" : "Dark"}</button>

       
       <div  id="dentistasFavoritos">
          Dentistas Favoritos: <strong id="cantidadDeFavoritos">{state.dentistasFavoritos.length}</strong>
       </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
