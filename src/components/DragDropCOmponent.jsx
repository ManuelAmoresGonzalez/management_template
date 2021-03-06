import { storage } from "../firebase";
import '../Style/dragdropcomponent.css'


function DragDropCOmponent( { funcion, name } ) {  
  
  const sendFile = (e) => {
      const file= e.target.files[0];
      createFile(name, file)       
  };

  const createFile = (category, file) => {
    const storageRef= storage.ref(`/${category}/${file.name}`);
    const task= storageRef.put(file);
    task.on('state_changed', snapshot => {
    },error => {
        console.log(error.message)
    }, () => {        
      var storageRef= storage.ref(`/${category}/${file.name}`)
      storageRef.getDownloadURL().then(function(url){
        //console.log(url);
        funcion(url);
      })
    })
  }
  
  
  return (
    <div className="componentDragDrop">
        <br />
        <div className="image-upload-wrap">           
          <h3 className="moveTittle"><i className="material-icons iconSize">file_upload</i></h3>        
          <input
            className="file-upload-input"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
                sendFile(e);
            }}
          />
        </div>
    </div>
  );
}

export default DragDropCOmponent;