import './App.css';
import NavbarPrimary from './components/Navbar-Primary';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import NavbarSecondary from './components/Navbar-Secondary';

function App() {
  return (
    <div className="app">
      <NavbarPrimary className="navbar-primary"/>
      <NavbarSecondary className="navbar-secondary"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
