import React, { useState } from "react";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";


import '../Style/carrouselcomponent.css'


import DragDropCOmponent from './DragDropCOmponent'



const CreateCarrousel = () => {
  let message= false;
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [name, setCategoryName] = useState("");

  function setData(){
    swal.fire({
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Agregar mas imagenes ?'
    }).then((result) => {
      if (!result.isConfirmed) {
        swal.fire(
          'Imagenes agregadas correctamente',
          '',
          'success'
        )
        navigate('/admin')
      }
    })
  }

  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'carrousel/'+name), {             
          url,
    })
    .then(() => {alert('Agregado correctamente')})
    .catch((error)=> {alert('A ocurrido el error: '+error)})
  }

  return (
    <div className='componentCarrousel'>

      <h5>Crear carrousel</h5>
      <DragDropCOmponent funcion = {setUrl} name = {'Carrousel'} />
      
      <div className='row container'>
        <form className='' onSubmit={ (event) => {   
              event.preventDefault(); 
              writeUserData();
              setData();
              }}>
          
          
          <div className="row">          
          <div className="input-field ">
            
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={name}
                     onChange={(e) => setCategoryName(e.target.value)}
              />
            <label htmlFor="icon_prefix">Nombre de la imagen</label>
            </div>


          </div>
          { <button className='waves-effect waves-light btn mt-2 z-index-0' type='submit' >Crear nueva imagen
            
            </button> }

          <hr />
        </form>


      </div>
            
      
    </div>
  )
}

export default CreateCarrousel