import React, { useState } from "react";
import DragDropCOmponent from './DragDropCOmponent'

import { getDatabase, ref, set } from "firebase/database";

const CreateLogo = () => {
  const [url, setUrl] = useState("");

  function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'logo'), {             
          url,
    })
    .then(() => {alert('Agregado correctamente')})
    .catch((error)=> {alert('A ocurrido el error: '+error)})
  }

  return (
    <div className='render'>

      <h4>Crear logo</h4>
      <DragDropCOmponent funcion = {setUrl} name = {'Logo'} />
      {url != "" ? writeUserData() : console.log("") }
      
    </div>
    
  )
}

export default CreateLogo