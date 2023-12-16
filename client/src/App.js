import './App.css';

// ! COMPONENTES
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

// ! LIBRERIAS
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
