import React from 'react'
import { useNavigate} from "react-router-dom";

//CSS
import '../Style/productsview.css';
import Products from './Products';

const CategoryView = () => {
  const navigate = useNavigate();
  

  return (
    <div className='render'>
      <div className='boxtittle'>
      <h4 className='tittle'>Catalogo de categorías</h4>
      <a className="btn-floating btn-large waves-effect waves-light green" ><i className="material-icons" onClick={() => navigate('/createcategory')}>add</i></a>
      <a className="btn-floating btn-large waves-effect waves-light grey buttonBackCategoryView" ><i className="material-icons" onClick={() => navigate('/admin')}>arrow_back</i></a> 
      </div>

      <Products component = {'categories'}
                value = {true}      
      />   
    </div>
  )
}

export default CategoryView