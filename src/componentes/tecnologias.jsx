import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import  "../styles/tecnologias.css" 


function Tecnologias() {
    return ( 
    <section>
         <h2>Tecnologías</h2>
      <div className="tecnologias-container">
        <div className="tecnologia">
          <FaHtml5 size={24} />
          <p>HTML5</p>
        </div>
        
        <div className="tecnologia">
          <FaCss3 size={24} />
          <p>CSS3</p>
        </div>

        <div className="tecnologia">
          <FaJs size={24} />
          <p>JavaScript</p>
        </div>

        <div className="tecnologia">
          <FaReact size={24} />
          <p>React</p>
        </div>

        <div className="tecnologia">
          <FaNode size={24} />
          <p>Node.js</p>
        </div>
      </div>
    </section>

        );
}

export default Tecnologias;