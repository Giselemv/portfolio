import Contacto from "../componentes/contacto";
import SobreMi from "../componentes/sobre-mi";
import  "../styles/home.css" 
import Tecnologias from "../componentes/tecnologias";
import Estudios from "../componentes/estudios";


function Home() {

    return ( 
        <div className="home-container">
            <SobreMi/>
            <Tecnologias/>
            <Estudios/>
            <Contacto/>
            
        </div>
        );
}

export default Home;