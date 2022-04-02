import React, { useEffect, useState } from "react";
import { useNavigate, Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import swal from "sweetalert";



const Loggin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowLogin, setShouldShowLogin] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (user){
      navigate("/register");
    }else{
      navigate("/");
    }    
  }, [user]);


  return (
    <div className='container'>
      <h3>Inicio de sesión</h3>
      <hr />
      <div className='row container'>
        <form className=''>
          <div className="row">
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
          { <button className='waves-effect waves-light btn' type='submit' onClick={ () => {
              
              logInWithEmailAndPassword( email, password)         
              }}>Enviar</button> }

          <hr />
        </form>

      </div>

    </div>
  )
}

export default Loggin
