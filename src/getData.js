import axios from "axios";

function getData(setData, component){
    axios
      .get(
        `https://datosplantilla-46cf4-default-rtdb.firebaseio.com/${component}.json`
      )
      .then((res) => {
        setData(res.data);
        setData(res.data)
      });
}

export {
    getData  
};
