import React from "react";
import '/Styles/StylesFooter.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

const Footer = () => {


    return (
        <footer>
        <div className="contenedor">
            <i className="fa-brands fa-twitter" onClick="twitter()"></i>
            <i className="fa-brands fa-instagram" onClick="redirigir()"></i>
            <i className="fa-brands fa-tiktok" onClick="tiktok()"></i>
            <p>Aviso de Privacidad | Términos y Condiciones</p>
            <p>K Os Beauty® | Todos los derechos reservados, México 2023.</p>
        </div>
        </footer>
    );
};

export default Footer;
