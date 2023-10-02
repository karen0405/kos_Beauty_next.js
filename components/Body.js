import React from "react";
import '/Styles/StylesBody.css'
import Link from 'next/link';

const Body = () => {


    return (
        <div className="body">
            <div className="fondo">
                <img src="/assets/img1.jpg" alt="" className="imagen-fondo"/>
                    <div className="texto1">K Os Beauty</div>
                    <div className="texto2">¡Estamos de vuelta!</div>
                    <div className="boton">
                        <Link href="/pages/imagenes">
                        <button>Haz clic aquí</button>
                        </Link>
                    </div>
            </div>

            <div className="info">
                <div className="info-labiales">CONOCE NUESTROS <span className="negro">LABIALES</span></div>
            </div>

            <div className="container">
                <div className="card">
                    <img src="/assets/imgsetlabial.jpg" alt="" id="imagen"/>
                        <p>MATTE LIPSTICK SET: NINI, K OS, KENIA OS</p>
                        <a href="">$899.00</a>
                </div>
                <div className="card">
                    <img src="/assets/imglabialrojo.jpg" alt="" id="imagen2"/>
                        <p>KENIA OS - MATTE LIPSTICK</p>
                        <a href="">$369.00</a>
                </div>
                <div className="card">
                    <img src="/assets/imglabialnude.jpg" alt="" id="imagen3"/>
                        <p>K OS - MATTE LIPSTICK</p>
                        <a href="">$369.00</a>
                </div>
            </div>

            <div className="infodekosbeauty">
                <img src="/assets/fotonini.jfif" alt="" className="imagen-kos"/>
                    <div className="t1">CONOCE ACERCA DE</div>
                    <div className="t2">NOSOTROS</div>
                    <div className="t3">La marca K Os Beauty fue diseñada para ti que te gusta
                    </div>
                    <div className="t6">atreverte y ser tú mismo.</div>
                    <div className="t4">
                        En la cual buscamos la expresión y la libertad de tu creatividad. Una marca que no
                    </div>
                    <div className="t7"> tiene límites, estigmas, ni barreras sociales</div>
                    <div className="t5">
                        Productos 100% libres de crueldad animal.
                    </div>
            </div>

            <div className="infonini">
                <img src="/assets/kenia.jfif" alt="" className="imagen-nini"/>
                    <div className="tex1">De Kenia</div>
                    <div className="tex2">Flores</div>
                    <div className="tex3">Osuna</div>
                    <div className="tex4">para tí.</div>
                    <div className="tex5">Mi marca nace en el año 2018 en un boceto, en una hoja en</div>
                    <div className="tex6">blanco como un pequeño sueño. Después de trabajar</div>
                    <div className="tex7">arduamente en las formulas perfectas para ustedes, hoy, <span
                        className="negra">K</span></div>
                    <div className="tex8"><span className="negra">Os Beauty</span>es una realidad.</div>
                    <div className="tex9">Espero y disfrutes estos productos que he desarrollado con</div>
                    <div className="tex10">tanto amor.</div>
                    <div className="tex11">Te amo gracias, por tanto.</div>
                    <div className="tex12">No olvides etiquetarnos en nuestro Instagram @kosbeauty</div>
            </div>

            <div className="iconos">
                <img src="/assets/imgcamion.png" alt="" className="icon-camion"/>
                    <img src="/assets/imgtarjeta.png" alt="" className="icon-tarjeta"/>
                        <img src="/assets/imgpet.png" alt="" className="icon-pet"/>
            </div>

            <div className="email">
                <div className="frase">¡Entérate!</div>
                <div className="frase2">Mantente actualizado acerca de nuevos lanzamientos.</div>

                <input type="text" id="textoUsuario" placeholder="Email" name="textoUsuario"/>
                    <input type="submit" id="boton-s" value="SUSCRIBIRME " onClick="suscripcion()"/>
            </div>

        </div>
    );
};

export default Body;
