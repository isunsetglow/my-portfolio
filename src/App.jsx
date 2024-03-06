import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Home, Projects, Resume, Photography } from './components/pages/';

function App() {
  return (
    <body>
      {/* <section id="up"></section>
        <section id="down"></section>
        <section id="left"></section>
        <section id="right"></section> */}
      <div className="App">
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/resume" element={<Resume />} />
          
        </Routes>

        
      </div>
      
    </body>
  )
}

export default App;
