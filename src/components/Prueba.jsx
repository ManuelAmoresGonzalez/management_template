import React from 'react'
import '../Style/tableArticles.css'


const Prueba = () => {
    
  return (
    
    <table>
    <thead>
      <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Update</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td><img src="https://firebasestorage.googleapis.com/v0/b/datosplantilla-46cf4.appspot.com/o/Carrousel%2FGitHub.png?alt=media&token=83a476c0-49eb-430f-ba83-d1ecdf623eef" alt="" className="circle responsive-img"/></td>
        <td>Eclair</td>
        <td>$0.87</td>
        <td>Eclair</td>
        <td>$0.87</td>
        <td>$0.87</td>
        <td>
            <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" >delete</i></a>
            <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons">sync</i></a>
        </td>                     
        
      </tr>
      <tr>
        <td><img src="http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg" alt="" className="circle responsive-img"/></td>
        <td>Jellybean</td>
        <td>$3.76</td>
        <td>Eclair</td>
        <td>$0.87</td>
        <td>$0.87</td>
        <td>
            <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" >delete</i></a>
            <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons">sync</i></a>
        </td> 
      </tr>
      <tr>
        <td><img src="http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg" alt="" className="circle responsive-img"/></td>
        <td>Lollipop</td>
        <td>$7.00</td>
        <td>Eclair</td>
        <td>$0.87</td>
        <td>$0.87</td>
        <td>
            <a className="margen btn-floating btn-Small waves-effect waves-light red"><i className="material-icons" >delete</i></a>
            <a className="margen btn-floating btn-Small waves-effect waves-light blue"><i className="material-icons">sync</i></a>
        </td> 
      </tr>
    </tbody>
  </table>
  )
}

export default Prueba