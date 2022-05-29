import { getDatabase, remove, ref, update } from "firebase/database";



const dbRealtime = getDatabase();

function deleteDataRealtime(component, id) {
    console.log("Este es el id: "+id)
    remove(ref(dbRealtime, `${component}/${id}`))
}  

function updateDataRealtime(component, id, nameArticle, priceArticle, descriptionArticle) {
    const db = getDatabase();
    if(priceArticle !== undefined){
        update(ref(db, `${component}/${id}` ), {  
            description: descriptionArticle,
            name: nameArticle,
            price: priceArticle,        
        })
        .then(() => {
          alert('Actualizado correctamente')
          //navigate('/productsview')
        })
        .catch((error)=> {alert('A ocurrido el error: '+error)})
    }else{
        update(ref(db, `${component}/${id}` ), {  
            name: nameArticle,      
        })
        .then(() => {
          alert('Actualizado correctamente')
          //navigate('/productsview')
        })
        .catch((error)=> {alert('A ocurrido el error: '+error)})
    }
    
  
}  

export {
    deleteDataRealtime,
    updateDataRealtime 
};