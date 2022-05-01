import './App.css';
import Loggin from './components/Loggin';
import Register from './components/Register';
import Administration from './components/Administration';
import CreateCarrousel from './components/CreateCarrousel';
import CreateCategory from './components/CreateCategory';
import CreateLogo from './components/CreateLogo';
import ProductsView from './components/ProductsView';
import {  Route, Routes, useNavigate } from "react-router-dom";
import { CreateProduct } from './components/CreateProduct';

function App() {
  return (
    <div className="app">    
      {/* <Crud/> */}
        <Routes>
          <Route exact path="/" element={<Loggin />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/admin" element={<Administration />} />
          <Route exact path="/createcarrousel" element={<CreateCarrousel /> } />
          <Route exact path="/createcategory" element={<CreateCategory /> } />
          <Route exact path="/createlogo" element={<CreateLogo /> } />
          <Route exact path="/createproduct" element={<CreateProduct /> } />
          <Route exact path="/productsview" element={<ProductsView /> } />
        </Routes>      
    </div>
  );
} 

export default App;
