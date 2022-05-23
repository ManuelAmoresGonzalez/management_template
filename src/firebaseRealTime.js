import { getDatabase, remove, set, ref } from "firebase/database";



const dbRealtime = getDatabase();

function deleteDataRealtime() {
    remove(ref(dbRealtime, 'categories/Tennis'))
}  

export {
    deleteDataRealtime    
};