import { getDatabase, remove, ref } from "firebase/database";



const dbRealtime = getDatabase();

function deleteDataRealtime(component, name) {
    console.log("A eliminar: "+component + " "+ name)
    remove(ref(dbRealtime, `${component}/${name}`))
}  

export {
    deleteDataRealtime    
};