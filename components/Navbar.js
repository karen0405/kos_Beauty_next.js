import React from "react";
import 'Styles/StylesNavbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
const Navbar = () =>{
  return(
      <nav className="navbar">
          <div className="titulo">
              <img src="/assets/logo.png" alt="" className="logo-titulo"/>
          </div>

          <ul className="lista">
              <li><a href="">INICIO</a></li>
              <li><a href="" className="activate">PARA TÍ</a></li>
              <li><a href="">COSMÉTICOS</a></li>
              <li><a href="">MI CUENTA</a></li>
          </ul>

          <ul className="carrito">
              <li><a href=""><i className="fas fa-shopping-cart" onClick="carrito()" alt="Labial"
                                onMouseOver="mostrarMensaje()"></i></a></li>
          </ul>

          <div className="menu">
              <i className="fa fa-bars"></i>
          </div>
      </nav>


  );
};

export default Navbar;
