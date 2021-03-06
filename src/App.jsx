import './App.css';
import Signin from './Components/Sign in/Sign in'
import SignUp from './Components/Sign up/Sign up';
import Galeria from './Components/Galeria/Galeria'
import Acerca from './Components/Acerca de/Acerca'
import Blog from './Components/Blog/Blog';
import Suscripcion from './Components/Sesion/Suscripcioncli';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Horarios from './Components/Horarios/Horarios'
import React, { Component } from 'react';
import DashboardG from './Components/Dashboard/DashboardG';


function App() {
  //const firebase = useFirebaseApp();
 // console.log(firebase);
  return (
    
    <Router>
        <Route exact path="/Components/Blog/Blog" component={Blog}/>
        <Route exact path="/Components/Sign up/Sign up" component={SignUp}/>
        <Route exact path="/Components/Sign in/Sign in" component={Signin}/>
        <Route exact path="/Components/Galeria/Galeria" component={Galeria}/>
        <Route exact path="/Components/Horarios/Horarios" component={Horarios}/>
        <Route exact path="/Components/Acerca de/Acerca" component={Acerca}/>
        <Route exact path="/Components/Sesion/Suscripcioncli" component={Suscripcion}/>
        <Route exaxt path="/Components/Dashboard/DashboardG" component={DashboardG}/>  
        <Route exaxt path="/Components/NewCliente/NewCliente" component={DashboardG}/>
        <Route exaxt path="/Components/NewPago/NewPago" component={DashboardG}/>
        <Route exaxt path="/Components/Clientes/Clientes" component={DashboardG}/>
        <Route exaxt path="/Components/Pagos/Pagos" component={DashboardG}/>
        <Route exaxt path="/Components/Clientes/ModCliente" component={DashboardG}/>
        <Route exaxt path="/Components/Clientes/ElimClientes" component={DashboardG}/>

      </Router>
     
  );
}

export default App;

/*
class App extends Component{
  state={
    data:[],
    isertar: false,
    user:{
      nombreuser: '',
      nombre: '',
      apellidos:'',
      correo:'',
      contraseña:''
    }
  }

  peticionesGet=()=>{
    firebase.child('Usuarios').on('value', usuario=>{
      if(usuario.val()!==null){
        this.setState({...data, data:usuario.val()})
      }else{
        this.setState({data:[]})
      }
    })
  }

  componentDidMount(){
    this.peticionesGet();
  }

  render(){
    return(
      <Router>
        <Route exact path="/Components/Blog/Blog" component={Blog}/>
        <Route exact path="/Components/Sign up/Sign up" component={SignUp}/>
        <Route exact path="/Components/Sign in/Sign in" component={Signin}/>
        <Route exact path="/Components/Galeria/Galeria" component={Galeria}/>
        <Route exact path="/Components/Horarios/Horarios" component={Horarios}/>
        <Route exact path="/Components/Acerca de/Acerca" component={Acerca}/>
      </Router>
    );
  }

}
export default App;

*/

























