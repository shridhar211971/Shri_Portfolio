import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Preloader from "../src/components/Pre";
import NavBar from './components/Navbar';
import Home from './components/Home/Home';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import About from './components/About/About';
import Resume from "./components/Resume/ResumeNew";
import Projects from './components/Projects/Projects';
import "./style.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
   <Router>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/"/>} />
        </Routes>

    </div>
    <Footer />
   </Router>
  )
}

export default App
