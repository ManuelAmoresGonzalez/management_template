import './App.css';
import Loggin from './components/Loggin';
import Register from './components/Register';
import Administration from './components/Administration';
import CreateCarrousel from './components/CreateCarrousel';
import Card from './components/Card';
import CarrouselView from './components/CarrouselView';
import CreateCategory from './components/CreateCategory';
import CreateLogo from './components/CreateLogo';
import ProductsView from './components/ProductsView';
import {  Route, Routes, useNavigate } from "react-router-dom";
import { CreateProduct } from './components/CreateProduct';
import { AuthContext } from './auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer } from './auth/authReducer';
import { PrivateRoute } from './PrivateRoute';
import CategoryView from './components/CategoryView';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  
  useEffect(() => {
    
    if(!user) return;

    localStorage.setItem('user', JSON.stringify(user));
    
  }, [user])
  


  return (
    <div className="app">    
      {/* <Crud/> */}
      <AuthContext.Provider value={{user, dispatch}}>

        <Routes>
          <Route exact path="/" element={<Loggin />} />
          <Route exact path="/register" element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
            } 
            />
          <Route exact path="/carrouselview" element={
            <PrivateRoute>
              <CarrouselView />
            </PrivateRoute>
            } 
          />
          <Route exact path="/categorview" element={
            <PrivateRoute>
              <CategoryView />
            </PrivateRoute>
            } 
          />
          <Route exact path="/admin" element={
            <PrivateRoute>
              <Administration />
            </PrivateRoute>
            }
         />
          <Route exact path="/createcarrousel" element={
              <PrivateRoute>
                <CreateCarrousel /> 
              </PrivateRoute>
            } 
          />
          <Route exact path="/createcategory" element={
            <PrivateRoute>
              <CreateCategory /> 
            </PrivateRoute>
          } 
          />
          <Route exact path="/createlogo" element={
          <PrivateRoute>
            <CreateLogo /> 
          </PrivateRoute>
          } 
          />
          <Route exact path="/createproduct" element={
            <PrivateRoute>
              <CreateProduct /> 
            </PrivateRoute>
            } 
          />
          <Route exact path="/productsview" element={
            <PrivateRoute>
              <ProductsView /> 
            </PrivateRoute>
          } 
          />
        </Routes>      
        </AuthContext.Provider>
    </div>
  );
} 

export default App;
