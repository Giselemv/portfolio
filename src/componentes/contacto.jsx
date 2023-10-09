import { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import  "../styles/contacto.css" 


function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const onSend = (e) => {
        e.preventDefault();
      };
    return ( 
      <section id="contacto" className="contacto-container">
        <div>
            <h2>Contactáme</h2>
          </div>

        <div className="formulario-contacto">    
          <div className="contacto-texto">
                <p className="texto">
                  Si estás en búsqueda de una programadora trainee con conocimiento tanto de Back End 
                  como de Front End y con muchas ganas de trabajar y seguir aprendiendo, entonces te invito 
                  a contactarme por mensaje o por mis redes sociales.
                </p>
                <div className="redes-sociales">
                    <a href="https://github.com/Giselemv">
                      <FaGithub size={40} color="#B8AFD5" className="rounded-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/gisele-valdiviezo">
                      <FaLinkedin size={40} color="#B8AFD5" className="rounded-icon" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=1166051107">
                      <IoLogoWhatsapp size={40} color="#B8AFD5" className="square-icon" />
                    </a>
                </div>
          </div>

          <div className="contacto-formulario">
              <form onSubmit={onSend} className="contact-form">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Ingrese su email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    name="message"
                    placeholder="Escriba su mensaje"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit">Enviar</button>
              </form>
          </div>
        </div>   
    </section>

        );
}

export default Contacto;