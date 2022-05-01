import React from 'react'
import { useNavigate} from "react-router-dom";
import '../Style/administration.css';
import axios from 'axios';

const Administration = () => {
  const navigate = useNavigate();

  //Get datos de la base de datos firebase
  // const peticion = async () => {
  //   const { data } = await axios.get(
  //     "https://datosplantilla-46cf4-default-rtdb.firebaseio.com/.json"
  //   );
  
  //   return data;
  // };  
  // const data = peticion().then(console.log);

  return (
    <div className='structure' >
      <h5>Configuración</h5>   
      <hr/>   

      <button className="btn waves-effect waves-light col s12 m4 l2 mt-5" type="submit" name="action" onClick={() => navigate('/productsview')}> Productos
        <i class="material-icons right">assessment</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/createcarrousel')}> Carrousel
        <i class="material-icons right">burst_mode</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/createlogo')}> Logo
        <i class="material-icons right">folder_shared</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2 mt-3" type="submit" name="action" onClick={() => navigate('/createcategory')}> Categoría
        <i class="material-icons right">library_add</i>
      </button>

    </div>
  )
}

export default Administration