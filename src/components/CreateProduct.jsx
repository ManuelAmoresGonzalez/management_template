import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import Select from 'react-select'
import axios from 'axios';
import DragDropCOmponent from "./DragDropCOmponent";
import { setLogLevel } from "firebase/app";

export const CreateProduct = () => {

  const navigate = useNavigate();
  const mySet = [];

  const [name, setArticleName] = useState("");
  const [price, setArticlePrice] = useState(0);
  const [category, setArticleCategory] = useState("");
  const [description, setArticleDescription] = useState("");
  const [url, setUrl] = useState("");


  const handleChange = e => {
    setArticleCategory(e.value);
  }

  //Get datos de la base de datos firebase
  const peticion = async () => {
    const { data } = await axios.get(
      "https://datosplantilla-46cf4-default-rtdb.firebaseio.com/categories/.json"
    );
    let cont= 0;
    for (const [clave, valor] of Object.entries(data)) {
      let setData = {value: valor.id, label: valor.name};
      mySet[cont] = setData;    
      cont++;  
    }    
    return data;
  };  
  const data = peticion()



  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'products/'+name), {   
          category,
          description,     
          id: name,
          name,
          price,
          url,
    })
    .then(() => {
      alert('Agregado correctamente')
      navigate('/productsview')
    })
    .catch((error)=> {alert('A ocurrido el error: '+error)})
  }
  
  return (    
    <div className="render"> 
      <h4 className='tittle' >Crear un producto</h4>   
      <a className="btn-floating btn-large waves-effect waves-light grey buttonBackCreate" ><i className="material-icons" onClick={() => navigate('/productsview')}>arrow_back</i></a> 
      <DragDropCOmponent funcion = {setUrl} name = {'products/'+name} />      
      <div className='row container'>
        <form className='' onSubmit={ (event) => {   
              event.preventDefault(); 
              writeUserData();
              }}>
          <div className="row">
          <div className="input-field ">
              <input id="icon_prefix "
                    type="text"
                    className="validate"
                    value={name}
                    onChange={(e) =>
                      setArticleName(e.target.value)                                         
                    }                     
              />
              
              <label htmlFor="icon_prefix">Nombre del articulo</label>
            </div>


          <div className="input-field col s12">
              <Select 
                options={mySet} 
                onChange={handleChange}
                placeholder="Seleccione la categor??a a la cual pertenece"
                
              />
          </div>


            <div className="input-field ">
              <input id="icon_prefix "
                     type="number"
                     className="validate"
                     value={price}
                     onChange={(e) => setArticlePrice(e.target.value)}
              />
              <label htmlFor="icon_prefix">Precio</label>
            </div>


            <div className="input-field col-md-12">
              <textarea id="textarea1" 
                        className="materialize-textarea"
                        value={description}
                        onChange={(e) => setArticleDescription(e.target.value)}
              ></textarea>
              <label htmlFor="textarea1">Textarea</label>
            </div>

          </div>

          <button className='waves-effect waves-light btn mt-2 z-index-0' type='submit'>Crear nuevo Producto
            
          </button>

          <hr />
        </form>


      </div>
    </div>
  )
}

