import React from 'react'
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import { getDatabase, ref, set } from "firebase/database";

const Administration = () => {
  const navigate = useNavigate();
  // fetch('https://datosplantilla-46cf4-default-rtdb.firebaseio.com/.json')
  // .then(response => response.json())
  // .then(data => console.log(data));
  const peticion = async () => {
    const { data } = await axios.get(
      "https://datosplantilla-46cf4-default-rtdb.firebaseio.com/.json"
    );
  
    return data;
  };  
  const data = peticion().then(console.log);

  

  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'carros/persona'), {
      'ssff': "ds"
    });
  }
  



  return (
    <div className='bg-secondary row' >      

      <button className="btn waves-effect waves-light col s12 m4 l2" type="submit" name="action" onClick={() => writeUserData()}> Crear Producto
        <i class="material-icons right">assessment</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2" type="submit" name="action" onClick={() => navigate('/createcarrousel')}> Crear Carrousel
        <i class="material-icons right">burst_mode</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2" type="submit" name="action" onClick={() => navigate('/createcategory')}> Crear Logo
        <i class="material-icons right">folder_shared</i>
      </button>

      <button class="btn waves-effect waves-light col s12 m4 l2" type="submit" name="action" onClick={() => navigate('/createcategory')}> Crear Categoría
        <i class="material-icons right">library_add</i>
      </button>

    </div>
  )
}

export default Administration