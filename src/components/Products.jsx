import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getData } from "../getData";


const Products = ({component, value}) => {
  const [data, setData] = useState(null);
  const arreglo= []

    function componentDidMount() {
    
        for(const [key, value] of Object.entries(data)){
            arreglo.push(value)        
        }         
    }

  useEffect(() => {
    getData(setData, component)
  }, []);

  return (
    <div className="App">
      {data != null ? componentDidMount() : null}
    <table>
      <thead>
        <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Update</th>
        </tr>
      </thead>
      <tbody>
        { arreglo.length > 0? arreglo.map(article => {
          return <Card 
          key= {article.name} 
          name = {article.name} 
          description = {article.description}
          price = {article.price}
          img={article.url}
          id= {article.id}
          value={value}
          component = {component}   
          funcion= {setData}  
          />
        }  ) : null}
      </tbody>
    </table>
    </div>
  );
};

export default Products;
