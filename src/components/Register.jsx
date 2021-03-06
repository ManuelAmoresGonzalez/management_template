import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword} from '../firebase'


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const navigate = useNavigate();
  
  return (
    <div className='container render'>
      <h4 className='tittle'>Registro de usuarios</h4>
      <hr />
      <div className='row container'>
        <form className=''>
          <div className="row">
          <div className="input-field ">
              <i className="material-icons prefix "> </i>
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={fullname}
                     onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="icon_prefix">Nombre completo</label>
            </div>
            <div className="input-field ">
              <i className="material-icons prefix "></i>
              <input id="icon_prefix "
                     type="text"
                     className="validate"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field col-md-12">
              <i className="material-icons prefix"></i>
              <input id="icon_telephone"
                     type="text"
                     className="validate"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="icon_telephone">Password</label>
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
