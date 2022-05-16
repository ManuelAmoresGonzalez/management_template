import React from 'react'
import { useNavigate} from "react-router-dom";

//CSS
import '../Style/productsview.css';

const ProductsView = () => {
  const navigate = useNavigate();
  

  return (
    <div className='render'>
      <div className='boxtittle'>
      <h4 className='tittle'>Ver los productos</h4>
      <a className="btn-floating btn-large waves-effect waves-light green" ><i class="material-icons" onClick={() => navigate('/createproduct')}>add</i></a>
      </div>
      
      <div className='bg-secondary boxview'>
        <h2>Basic Panel</h2>
        <div className="panel panel-default">
          <div className="panel-body">A Basic Panel</div>
        </div>
      </div>
    </div>
  )
}

export default ProductsView