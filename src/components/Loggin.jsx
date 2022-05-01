import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { auth, logInWithEmailAndPassword} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../Style/loggin.css';
import swal from "sweetalert2";



const Loggin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
            


  return (
    <div className='container'>
      <div className='row container render'>
        <h5>Iniciar sesión</h5>
        <form className='' onSubmit={ (event) => {   
              event.preventDefault();           
              logInWithEmailAndPassword( email, password).then(v => {
                if(v){
                  swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  navigate('/admin')
                }else{
                  swal.fire(
                    'Intentalo nuevamente',
                    '',
                    'warning'
                  )
                }
                
              })}}>
          <div className="row">
            <div className="input-field ">
              <i className="material-icons prefix "></i>
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
              <label for="icon_prefix">Email</label>
            </div>
            <div className="input-field col-md-12">
              <i className="material-icons prefix"></i>
              <input id="icon_telephone"
                     type="text"
                     className="validate"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
              />
              <label for="icon_telephone">Password</label>
            </div>

          </div>
          { <button className='waves-effect waves-light btn' type='submit' >Enviar</button> }

          <hr />
          <h6>Aún no te registras ?</h6>
          
        </form>
        <a class="waves-effect waves-light btn amber accent-3 mt-4" onClick={() => navigate('/register')}>REGISTRARSE</a>

      </div>

    </div>
  )
}

export default Loggin


