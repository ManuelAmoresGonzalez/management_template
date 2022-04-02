import './App.css';
import Loggin from './components/Loggin';
import Register from './components/Register';
import Administration from './components/Administration';
import {  Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      
        <Routes>
          <Route exact path="/" element={<Loggin />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<Administration />} />
        </Routes>
      
    </div>
  );
}

export default App;
