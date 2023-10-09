import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/home';
import  "./App.css" 
import Header from './componentes/header';
import Footer from './componentes/footer';


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
