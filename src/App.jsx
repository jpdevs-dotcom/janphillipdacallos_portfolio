import './app-style.css'
import RootLayout from "./Shared/Layouts/RootLayout";
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </RootLayout>
  )
}

export default App;