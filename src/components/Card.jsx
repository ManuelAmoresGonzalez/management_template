import React, {useState} from 'react';
import { getData } from "../getData";
import { deleteDataStorage } from '../firebaseStorage';
import { deleteDataRealtime, updateDataRealtime } from '../firebaseRealTime';
import UpdateProduct from './UpdateProduct';


import '../Style/card.css';


const Card = ({name,description, price, img, id, value, component, funcion}) => {

  const [modal, setModal] = useState(false);

  const Description = () => (    
    <UpdateProduct  id = {id} name={name} 
                    price= {price} 
                    description= {description} 
                    upDate= {updateDataRealtime} 
                    component= {component} 
                    modal= { setModal}
                    getData= {getData} 
                    funcion = {funcion}
    />  
    
  );

  function deleteProduct(){  
    deleteDataRealtime(component, id);
    deleteDataStorage(img);
    getData(funcion, component);       
  }

  function myFunction(){
    if(modal){
      setModal(false)
    }else{
      setModal(true)      
    }
  }

  


  return (

    <tr>
        <td><img src={img} alt="" className="circle responsive-img"/></td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
        <td>
          <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" onClick={() => deleteProduct()} >delete</i></a>
          {
            value? 
              <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons" onClick={() => /*updateDataRealtime(component, id)*/ myFunction()}>sync</i></a> :
              null
          } 
        </td>                     
        {
      modal ? <Description />: null
        } 
      </tr>
    // <div>
    // <div className='card'>
    //     <div className='contenedor-card'>
    //     <img src={img} alt="lang.svg" />
    //     <div className='name'>{name}</div>
    //     <div className='name'>{description}</div>
    //     <div className='name'>{price}</div>
    //     </div>
    //     <div className='contenedor-icons'>
    //         <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" onClick={() => deleteProduct()} >delete</i></a>
    //         {
    //           value? 
    //             <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons" onClick={() => /*updateDataRealtime(component, id)*/ myFunction()}>sync</i></a> :
    //             null
    //         }           
    //     </div>
              
    // </div>
 
    // </div>
  )
}
export default Card
