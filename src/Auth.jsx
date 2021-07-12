import React, {useState} from 'react'
import { useFirebaseApp, useUser } from 'reactfire';
import  'firebase/auth';

const Auth = ({props}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firebase= useFirebaseApp();
    const user= useUser();

    const submit = async () =>{
      console.log(email);
      console.log(password);
     await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const iniciar  = async () =>{
      console.log(email);
      console.log(password);
      await firebase.auth().signInWithEmailAndPassword(email,password);
     }

    const logout = async ()=>{
      console.log("Cerrar sesion")
      await firebase.auth().signOut();
    }




  return (
    <div>
      {
          !user.data &&
        <div>
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" onChange={(ev)=> setEmail(ev.target.value)}/>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)}/>
            <button onClick={submit}>Crear sesión</button>
            <button onClick={iniciar}>Iniciar sesión</button>
        </div>
        }
        {
          user.data && 
          <div>
            <p>Bienvenido:</p>
            <p>{user.data.email}</p>
            <button onClick={logout}>Iniciar sesión</button>
          </div>
        }
    </div>
  )
}

export default Auth;
