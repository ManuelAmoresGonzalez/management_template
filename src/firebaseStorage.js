import { getStorage, ref,deleteObject } from "firebase/storage";
import swal from "sweetalert2";


const dbStorage = getStorage();

function deleteDataStorage() {    
    const desertRef = ref(dbStorage, 'categorie/Zapatos/IMG-20180918-WA0044.jpg');
    deleteObject(desertRef).then(() => {
        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Eliminado correctamente',
            showConfirmButton: false,
            timer: 2000
          })
    }).catch((error) => {
      console.log("El producto seleccionado no existe")
    });
}


export {
    deleteDataStorage    
  };