import "../styles/estudios.css";
import ImagenFacultad from "../../public/logo-utn.png";

function Estudios() {
    return ( 
        <div id="estudios" >
            <h2>Mis estudios</h2>
            <div className="estudios-container">
                <div className="imagen-facultad">
                    <img src={ImagenFacultad} alt="Universidad Tecnológica Nacional"/>
                </div>
                <div className="informacion">
                    <h3>Desarrollo Web Full Stack</h3>
                    <p>Durante mi Diplomatura en Desarrollo Web Full Stack en la UTN FRBA, adquirí habilidades en:</p>
                    <p>Diseño web con HTML5, CSS3 y Bootstrap para crear sitios atractivos y funcionales.</p>
                    <p>Programación interactiva con JavaScript.</p>
                    <p>Uso de TypeScript para desarrollar aplicaciones web eficientes.</p>
                    <p>Gestión de bases de datos con MySQL y MongoDB.</p>
                    <p>Creación de sitios dinámicos en el lado del servidor con Node.js.</p>
                    <p>Desarrollo de aplicaciones web Full Stack con React JS, garantizando alta calidad en todo el proceso.</p>
                                    
                </div>
            </div>
            <div className="estudios-container">
                <div className="imagen-facultad">
                    <img src={ImagenFacultad} alt="Universidad Tecnológica Nacional" />
                </div>
                <div className="informacion">
                    <h3>Negociación de Bienes</h3>
                    <p>La Carrera de Técnico Universitario en Negociación de Bienes otorga conocimientos, actitudes, habilidades y elementos procedimentales para poder desempeñarse como auxiliar de comercio (corredor) y como auxiliar de justicia (martillero), y así, poder negociar bienes(corredores) o cumplir con órdenes de subasta (martilleros).</p>
                </div>       
            </div>
    </div>
  );
}

export default Estudios;