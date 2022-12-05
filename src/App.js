import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import './App.css';
import Weather from './components/Weather';
import State from './components/State';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <>
        < Navbar/>
        <Home/>
    
    </>
  );
}

export default App;
