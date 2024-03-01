import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { About, Projects, Resume, Photography } from './components/pages/';

function App() {
  return (
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </div>
  )
}

export default App;
