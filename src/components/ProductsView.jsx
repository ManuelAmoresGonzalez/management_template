import React from 'react'
import { useNavigate} from "react-router-dom";

//CSS
import '../Style/productsview.css';
import Products from './Products';

const ProductsView = () => {
  const navigate = useNavigate();
  

  return (
    <div className='render'>
      <div className='boxtittle'>
      <h4 className='tittle'>Catalogo de Productos</h4>
      <a className="btn-floating btn-large waves-effect waves-light green" ><i className="material-icons" onClick={() => navigate('/createproduct')}>add</i></a>
      <a className="btn-floating btn-large waves-effect waves-light grey buttonBackProductsView" ><i className="material-icons" onClick={() => navigate('/admin')}>arrow_back</i></a> 
      </div>

      <Products component = {'products'}
                value = {true}      
      />   
    </div>
  )
}

export default ProductsView