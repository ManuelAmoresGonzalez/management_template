import React, { useContext } from 'react'
import { useNavigate} from "react-router-dom";
import '../Style/administration.css';
import axios from 'axios';
import { storage, auth, logout} from '../firebase';
import { deleteDataStorage } from '../firebaseStorage';
import { deleteDataRealtime } from '../firebaseRealTime';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';
import Prueba from './Prueba';




const Administration = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)

  const handleLogout = () =>{
    
    dispatch({type: types.logout})
    
    navigate('/', {
      replace: true
    })
  }

  // console.log(context);
  //Get datos de la base de datos firebase
  // const peticion = async () => {
  //   const { data } = await axios.get(
  //     "https://datosplantilla-46cf4-default-rtdb.firebaseio.com/products.json"
  //   );
  //   return data;
  // };  
  // const data = peticion().then(console.log);  
  // <span className='nav-item nav-link text-info'>{user.email}</span>

  return (

    <div>
      <div className='structure' >
      
      <h4>Configuración - Bienvenido</h4>   
      <hr/>   

      <button className="btn waves-effect waves-light col s12 m4 l2 mt-5" type="submit" name="action" onClick={() => navigate('/productsview') }> Productos
        <i className="material-icons right">assessment</i>
      </button>

      <button className="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/carrouselview')}> Carrousel
        <i className="material-icons right">burst_mode</i>
      </button>

      {/* <button className="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/createlogo')}> Logo
        <i className="material-icons right">folder_shared</i>
      </button> */}

      <button className="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/categorview')}> Categoría
        <i className="material-icons right">library_add</i>
      </button>
    </div> 
    <a className="btn-floating btn-large waves-effect waves-light green positionLogout" ><i className="material-icons" onClick={handleLogout}>exit_to_app</i></a>
    
    </div>
    
  )
}

export default Administration