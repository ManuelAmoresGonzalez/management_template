import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getData } from "../getData";

const Products = ({ component, value }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const arreglo = [];

  function componentDidMount() {
    for (const [key, value] of Object.entries(data)) {
      arreglo.push(value);
    }
  }

  useEffect(() => {
    getData(setData, component);
  }, []);

  return (
    <div className="App">
      {data != null ? componentDidMount() : null}
      <form className="">
        <div className="row">
          <div className="input-field centerInput">
            <i className="material-icons prefix">search</i>
            <input
              id="icon_prefix "
              type="text"
              className="validate"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label htmlFor="icon_prefix"></label>
          </div>
        </div>

        <hr />
      </form>
      <div className="container">
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
            {arreglo.length > 0
              ? arreglo.map((article) => {
                  if ( article.name.includes(search) ) {
                    return (
                      <Card
                        key={article.name}
                        name={article.name}
                        description={article.description}
                        price={article.price}
                        img={article.url}
                        id={article.id}
                        value={value}
                        component={component}
                        funcion={setData}
                      />
                    );
                  } else if (search === "") {
                    return (
                      <Card
                        key={article.name}
                        name={article.name}
                        description={article.description}
                        price={article.price}
                        img={article.url}
                        id={article.id}
                        value={value}
                        component={component}
                        funcion={setData}
                      />
                    );
                  } else {
                    return;
                  }                
                })
              : null}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default Products;
