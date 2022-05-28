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
      <ul>
        { arreglo.length > 0? arreglo.map(article => {
          return <Card 
          key= {article.name} 
          name = {article.name} 
          description = {article.price}
          img={article.url}
          id= {article.id}
          value={value}
          component = {component}   
          funcion= {setData}  
          />
        }  ) : null}
      </ul>
    </div>
  );
};

export default Products;
