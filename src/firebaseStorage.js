import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from "./firebase";
import swal from "sweetalert2";

const dbStorage = getStorage();

function deleteDataStorage(url) {
  var fileRef = storage.refFromURL(url);
  fileRef
    .delete()
    .then(function () {
      // File deleted successfully
      console.log("File Deleted");
    })
    .catch(function (error) {
      // Some Error occurred
    });
}

export { deleteDataStorage };
