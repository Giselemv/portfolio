import  "../styles/header.css" 

function Header() {
  return (
    <div className="header-container">
      <div className="titulo-container">
        <h1 className="titulo">GIS</h1>
        <h1 className="punto">.</h1>
      </div>
      <div>
      <nav className="navbar-container">
        <ul> 
        <a href="#sobremi">Sobre mi</a>
        <a> Experiencia</a>
        <a>Proyectos</a>
        <a href="#estudios">Estudios</a>
        <a href="#contacto">Contacto</a>
        </ul> 
      </nav>
      </div>
    </div>
  );
}

export default Header;