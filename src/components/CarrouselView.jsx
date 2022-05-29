import React from 'react'
import { useNavigate} from "react-router-dom";

//CSS
import '../Style/productsview.css';
import Products from './Products';

const CarrouselView = () => {
    const navigate = useNavigate();
  return (
    <div className='render'>
      <div className='boxtittle'>
      <h4 className='tittle'>Imagenes del Carrousel</h4>
      <a className="btn-floating btn-large waves-effect waves-light green" ><i className="material-icons" onClick={() => navigate('/createcarrousel')}>add</i></a>
      </div>

      <Products component = {'carrousel'}
                value = {true}
       />     
    </div>
  )
}

export default CarrouselView