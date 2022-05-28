import { getDatabase, remove, ref, update } from "firebase/database";



const dbRealtime = getDatabase();

function deleteDataRealtime(component, id) {
    console.log("Este es el id: "+id)
    remove(ref(dbRealtime, `${component}/${id}`))
}  

function updateDataRealtime(component, id) {
    const db = getDatabase();
    update(ref(db, `${component}/${id}` ), {   
        description: "Holis",
    })
    .then(() => {
      alert('Actualizado correctamente')
      //navigate('/productsview')
    })
    .catch((error)=> {alert('A ocurrido el error: '+error)})
  
}  

export {
    deleteDataRealtime,
    updateDataRealtime 
};