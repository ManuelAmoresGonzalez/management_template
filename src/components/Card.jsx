import React, {useState} from 'react';
import { getData } from "../getData";
import { deleteDataStorage } from '../firebaseStorage';
import { deleteDataRealtime } from '../firebaseRealTime';


import '../Style/card.css';


const Card = ({lang,img, value, component, funcion}) => {


  function deleteProduct(){  
    deleteDataRealtime(component, lang);
    deleteDataStorage(img);
    getData(funcion, component); 
      
  }


  return (
    <div className='card'>
        <div className='contenedor-card'>
        <img src={img} alt="lang.svg" />
        <div className='name'>{lang}</div>
        </div>
        <div className='contenedor-icons'>
            <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" onClick={() => deleteProduct()} >delete</i></a>
            {
              value? 
                <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons">sync</i></a> :
                null
            }
            
        </div>
        
        
        
    </div>
  )
}
export default Card
