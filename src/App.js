import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slide from './components/Slider/Slide';
import Home from './components/Homepage/Home';
import About from "./components/About/About"
import Footer from './components/Footer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Slide/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
