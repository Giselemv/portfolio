import  "../styles/sobre-mi.css" 
import Foto from "../../public/foto.png";

function SobreMi() {
    return ( 
        <section className="sobremi-container" id="sobremi">
            <div>
                <h1 className="titulo-vio">Programadora Web Full Stack Trainee</h1>
                <h1 className="titulo-vio">Hola!</h1>
                <h1 className="titulo-vio">Me llamo Gisele Micaela Valdiviezo</h1>
            </div> 


            <div className="sobremi2-container">
                <div className="foto-container">
                    <img src={Foto} alt="Foto de Gisele Valdiviezo" width={130}/>
                </div>
                
                <div className="info-container">
                    <h2>¿Qué te contaría en una en entrevista?</h2>
                    <p>Tengo 23 años, vivo en Parque Patricios y estoy cursando una Diplomatura en Desarrollo Web Full Stack dada por la UTN.
                    Tengo como objetivo seguir capacitándome y comenzar a estudiar Ingeniería en Sistemas en el año entrante.
                    Por supuesto, me encantaría desarrollar mi carrera profesional en el mundo IT e implementar lo aprendido en la diplomatura.
                    </p>
                    <a href="../../public/CV Gisele Valdiviezo.pdf" download>
                        <button className="boton-efecto">Descargar CV</button>
                    </a>
                </div>
            </div>
        </section>
        );
}

export default SobreMi;