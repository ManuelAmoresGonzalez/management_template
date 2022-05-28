import React, {useState} from 'react';
import { getData } from "../getData";
import { deleteDataStorage } from '../firebaseStorage';
import { deleteDataRealtime, updateDataRealtime } from '../firebaseRealTime';


import '../Style/card.css';


const Card = ({name,img, id, description, value, component, funcion}) => {


  function deleteProduct(){  
    deleteDataRealtime(component, id);
    deleteDataStorage(img);
    getData(funcion, component); 
      
  }


  return (
    <div className='card'>
        <div className='contenedor-card'>
        <img src={img} alt="lang.svg" />
        <div className='name'>{name}</div>
        <div className='name'>{description}</div>
        </div>
        <div className='contenedor-icons'>
            <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" onClick={() => deleteProduct()} >delete</i></a>
            {
              value? 
                <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons" onClick={() => updateDataRealtime(component, id)}>sync</i></a> :
                null
            }
            
        </div>
        
        
        
    </div>
  )
}
export default Card
