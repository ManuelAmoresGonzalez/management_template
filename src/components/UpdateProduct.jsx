import React, { useState } from "react";
import "../Style/upgradeproduct.css";

const UpdateProduct = ({
  id,
  name,
  price,
  description,
  upDate,
  component,
  modal,
  getData,
  funcion,
}) => {
  const [nameArticle, setName] = useState(name);
  const [descriptionArticle, setDescription] = useState(description);
  const [priceArticle, setPrice] = useState(price);
  return (
    <div className="viewModal #fafafa grey lighten-5">
      <form
        className="styleForm"
        onSubmit={(event) => {
          event.preventDefault();
          upDate(component, id, nameArticle, priceArticle, descriptionArticle);
          modal(false);
          getData(funcion, component);
        }}
      >
        <label htmlFor="">Nombre del articulo</label>
        <input
          id=" "
          type="text"
          className=""
          value={nameArticle}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Descripción del articulo</label>
        <input
          id=" "
          type="text"
          className=""
          value={descriptionArticle}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="">Precio del articulo</label>
        <input
          id=" "
          type="text"
          className=""
          value={priceArticle}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Actualizar
          <i class="material-icons right">create</i>
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
