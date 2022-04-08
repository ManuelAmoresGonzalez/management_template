import React from 'react'
import { useNavigate} from "react-router-dom";

const Administration = () => {
  const navigate = useNavigate();
  return (
    <div style={{
        backgroundColor: 'blue',
        width: '100%',
        height: '100px',
        textAlign: 'center'}}>

      

      <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => navigate('/productsview')}> Productos
        <i class="material-icons right">send</i>
      </button>

      <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => navigate('/createcarrousel')}> Productos
        <i class="material-icons right">send</i>
      </button>

      <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => navigate('/createcategory')}> Productos
        <i class="material-icons right">send</i>
      </button>

    </div>
  )
}

export default Administration