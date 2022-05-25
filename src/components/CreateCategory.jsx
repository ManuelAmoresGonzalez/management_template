import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, remove } from "firebase/database";
import DragDropCOmponent from "./DragDropCOmponent";

const CreateCategory = () => {

  const navigate = useNavigate();

  const [name, setCategoryName] = useState("");
  const [url, setUrl] = useState("");

  function writeUserData() {
    //console.log(url);
    const db = getDatabase();
    set(ref(db, 'categories/'+ name), {         
          name,
          url,           
    })
    .then(() => {alert('Agregado correctamente')})
    .catch((error)=> {alert('A ocurrido el error: '+error)})
  }

  return (
    <div className="render">
      <h4 className='tittle'>CreateCategory</h4>
      {console.log("El nombre_ "+name)}
      <DragDropCOmponent funcion = {setUrl} name = {'categorie/'+name}/>      
      <div className='row container'>
        <form className=''>
          
          
          <div className="row">          
          <div className="input-field ">
            
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={name}
                     onChange={(e) => setCategoryName(e.target.value)}
              />
            <label htmlFor="icon_prefix">Nombre de la categoría</label>
            </div>


          </div>
          { <button className='waves-effect waves-light btn mt-2 z-index-0' type='submit' onClick={() => {
              writeUserData()
              navigate('/admin')}}>Crear nueva categoría
            
            </button> }

          <hr />
        </form>


      </div>
    </div>    
  )
}

export default CreateCategory