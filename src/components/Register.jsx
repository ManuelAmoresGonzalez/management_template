import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword} from '../firebase'
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const navigate = useNavigate();
  
  return (
    <div className='container'>
      <h3>Registro de usuarios</h3>
      <hr />
      <div className='row container'>
        <form className=''>
          <div className="row">
          <div className="input-field ">
              <i className="material-icons prefix ">person_pin </i>
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={fullname}
                     onChange={(e) => setName(e.target.value)}
              />
              <label for="icon_prefix">Nombre completo</label>
            </div>
            <div className="input-field ">
              <i className="material-icons prefix ">email</i>
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
              <label for="icon_prefix">Email</label>
            </div>
            <div className="input-field col-md-12">
              <i className="material-icons prefix">vpn_key</i>
              <input id="icon_telephone"
                     type="text"
                     className="validate"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
              />
              <label for="icon_telephone">Password</label>
            </div>

          </div>
          { <button className='waves-effect waves-light btn' type='submit' onClick={() => {
              registerWithEmailAndPassword(fullname ,email, password);
              navigate('/')}}>Enviar</button> }

          <hr />
        </form>


      </div>

    </div>
    
  )
}

export default Register
