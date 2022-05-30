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
      text: "¿Desea agregar más imágenes?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
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
          id:name,
          name,            
          url,
    })
    .then(() => {
                  
                })
    .catch((error)=> {
                        alert('A ocurrido el error: '+error)
                      })
  }

  return (
    <div className='componentCarrousel'>

      <h4 className='tittle'>Crear carrousel</h4>
      <a className="btn-floating btn-large waves-effect waves-light grey buttonBackCreate" ><i className="material-icons" onClick={() => navigate('/carrouselview')}>arrow_back</i></a> 
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