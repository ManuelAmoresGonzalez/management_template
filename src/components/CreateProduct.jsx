import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword} from '../firebase'
import Select from 'react-select'

export const CreateProduct = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [name, setArticleName] = useState("");
  const [price, setArticlePrice] = useState();
  const [color, setArticleColor] = useState("");
  const [amount, setArticleAmount] = useState();  
  const [category, setArticleCategory] = useState("");


  const handleChange = e => {
    setArticleCategory(e.value);
  }
  

  const navigate = useNavigate();
  return (
    <div className="render"> 
      <h5>Crear un producto</h5>
      <div className='row container'>
        <form className=''>
          <div className="row">
          <div className="input-field ">
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={name}
                     onChange={(e) => setArticleName(e.target.value)}
              />
            <label for="icon_prefix">Nombre del articulo</label>
            </div>


          <div class="input-field col s12">
              <Select 
                options={options} 
                onChange={handleChange}
                placeholder="Seleccione la categoría a la cual pertenece"
              />
              {
                console.log(category)
              }
          </div>


            <div className="input-field ">
              <input id="icon_prefix "
                     type="number"
                     className="validate"
                     value={price}
                     onChange={(e) => setArticlePrice(e.target.value)}
              />
              <label for="icon_prefix">Precio</label>
            </div>


            <div className="input-field col-md-12">
              <input id="icon_telephone"
                     type="text"
                     className="validate"
                     value={color}
                     onChange={(e) => setArticleColor(e.target.value)}
              />
              <label for="icon_telephone">Color del articulo</label>
            </div>


            <div className="input-field col-md-12">
              <input id="icon_telephone"
                     type="number"
                     className="validate"
                     value={amount}
                     onChange={(e) => setArticleAmount(e.target.value)}
              />
              <label for="icon_telephone">Cantidad en stock</label>
            </div>




          </div>
          { <button className='waves-effect waves-light btn mt-2 z-index-0' type='submit' onClick={() => {
              /*registerWithEmailAndPassword(fullname ,email, password);*/
              navigate('/')}}>Crear nuevo Producto
            
            </button> }

          <hr />
        </form>


      </div>
    </div>
  )
}
