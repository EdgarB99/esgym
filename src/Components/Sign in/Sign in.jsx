import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../img/logo.PNG';
import { useFirebaseApp, useUser } from 'reactfire';
import  'firebase/auth';
import {} from 'firebase/database';
import Usuario from '../Sesion/Usuario'
import Admin from '../Sesion/Admin';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Edgar B. Cesar M.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#658da7',
    color: "#fff",
    padding: theme.spacing(4),
    borderRadius:"10px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
  bg:{
    background:"#000",
    height:"100vh",
  }
}));


export default function SignIn() {
  const classes = useStyles();
  sessionStorage.setItem('Id', "No hay datos");
  const [nombreuser, setnombreuser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [tipouser, settipouser] = useState("");
  const firebase= useFirebaseApp();
  const user= useUser(); 

  useEffect(()=>{
    if(sessionStorage.getItem('Id')===""){

    }else{
    const dbRef = firebase.database().ref();
    dbRef.child("Usuarios").child(sessionStorage.getItem('Id')).get().then((snapshot) => {
      if (snapshot.exists()) {
        
        console.log(snapshot.val());
        setEmail(snapshot.val().email);
        setnombre(snapshot.val().nombre);
        setnombreuser(snapshot.val().nombreuser);
        setapellido(snapshot.val().apellido);
        settipouser(snapshot.val().tipou)
      }
      else {
        console.log("No data");
      }
    }).catch((error) => {
      console.error(error);
    });
    console.log('Entramos en el use');
  }
}
  ,[]);
  

  function lectura(userId) {
    if(userId===""){
    userId="a";
  }
        const dbRef = firebase.database().ref();
    dbRef.child("Usuarios").child(userId).get().then((snapshot) => {
      if (snapshot.exists()) {
        sessionStorage.setItem('Id', userId);
        console.log(sessionStorage.getItem('Id'));
        console.log(snapshot.val());
        setEmail(snapshot.val().email);
        setnombre(snapshot.val().nombre);
        setnombreuser(snapshot.val().nombreuser);
        setapellido(snapshot.val().apellido);
        settipouser(snapshot.val().tipou);
      }
      else {
        console.log("No data");
        sessionStorage.setItem('Id', 'Sin datos');
      }
    }).catch((error) => {
      console.error(error);
    });
    // [END rtdb_read_once_get]
  }

/*
  function lectura(userId) {
    var consulta = firebase.database().ref('Usuarios/'+userId);
    consulta.on('value', (snapshot) => {
       const data = snapshot.val();
       setEmail(snapshot.val().email);
       setnombre(snapshot.val().nombre);
       setnombreuser(snapshot.val().nombreuser);
       setapellido(snapshot.val().apellido);
       console.log(data);
    });
  }
*/
  const handleChange=e=>{
    setnombreuser(e.target.value);
    console.log(e.target.value);
    //lectura(e.target.value);
    if(e.target.value===""){
        console.log("no hay nada")
    }else{
      lectura(e.target.value);
    setEmail('');
    }
    
  }




  const iniciar  = async () =>{
    console.log(tipouser)
   await firebase.auth().signInWithEmailAndPassword(email,password)
   .catch((error) => {
    console.error(error);
    alert("Usuario invalido/inexistente");
  });   
  
   if(email==='correoAdmin1@hotmail.com'){
    settipouser('Administrador Principal')
  }
  else{
    settipouser('Cliente')
  }
  
  }
  

  function AoU(props) {
    const comp = props.comp;
    if (comp==='Administrador Principal') {
      return (  
      <Admin 
      usert={tipouser} 
      nameuser={nombreuser}
      nombre={nombre}
      apellidos={apellido}
      correo={user.data.email}  
      clikclo={logout}/>
      )
    }
    return ( 
    <Usuario 
    usert={tipouser} 
    nameuser={nombreuser}
    nombre={nombre}
    apellidos={apellido}
    correo={user.data.email}  
    clikclo={logout}/>
    )
  }

  const logout = async ()=>{
    console.log("Cerrar sesion")
    console.log(user.data.email)
    await firebase.auth().signOut();
    sessionStorage.setItem('Id', "");
  }
  return (
  <div>
    {
    !user.data && 
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <img src={logo} width="100%" height="100%"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
                color="primary"
                name="userName"
                autoComplete="fusername"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Nombre de usuario"
                autoFocus
                inputProps={{
                  className:classes.input
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={handleChange}
              />
          <TextField
            color="primary"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{
              className:classes.input
            }}
            style={{
              backgroundColor: "rgba(255,255,255,.5)"
          }}
          onChange={(ev)=> setPassword(ev.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar Contraseña"
          />
          <Button
            onClick={iniciar}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/" style={{color:"inherit", textDecoration:"none"}} variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/Components/Sign up/Sign up" variant="body2" style={{color:"inherit", textDecoration:"none"}}>
                {"¿No tienes cuenta? Resgistrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  }
  {
        user.data &&
        <div>
        <AoU comp={tipouser} />
      </div>
  }
  </div>
  );
}



/*

class SignIn extends Component{
  state={
    data:[],
    isertar: false,
    user:{
      nombreuser: '',
      nombre: '',
      apellidos:'',
      email:'',
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

  handleChange=e=>{
    this.setState({user:{
      ...this.state.user,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.user);
  }


  render(){
    const classes = useStyles();
    const [nombreuser, setnombreuser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");
    const [tipouser, settipouser] = useState("");
    const firebase= useFirebaseApp();
    const user= useUser();
  
    function lectura(userId) {
      var consulta = firebase.database().ref('Usuarios/'+userId);
      consulta.on('value', (snapshot) => {
         const data = snapshot.val();
        console.log(data);
        setEmail(data);
        //setnombre(snapshot.val().nombre);
        //setapellido(snapshot.val().apellido);
      });
    }
  
  
  
    const iniciar  = async () =>{
      console.log(nombreuser);
      //console.log(email);
      
     await firebase.auth().signInWithEmailAndPassword('blackwarrior-90@hotmail.com',password)
     .catch((error) => {
      console.error(error);
      alert("Usuario invalido/inexistente");
    });   
    lectura(nombreuser); 
     console.log(email);
     console.log(nombre);
     console.log(apellido);
     if(email==='blackwarrior-90@hotmail.com'){
      settipouser('Administrador Principal')
    }
    else{
      settipouser('Cliente')
    }
    
    }
  
  
    function readOnceWithGet(userId) {
      // [START rtdb_read_once_get]
      const dbRef = firebase.database().ref();
      dbRef.child("Usuarios").child(userId).get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      // [END rtdb_read_once_get]
    }
    
  
  
  
    function AoU(props) {
      const comp = props.comp;
      if (comp==='Administrador Principal') {
        return (  
        <div>
        {Object.keys(this.state.data).map(i=>{
          return <Admin key={i} >
        usert={tipouser} 
        nameuser={this.state.data[i].nombreuser}
        nombre={this.state.data[i].nombre}
        apellidos={this.state.data[i].apellidos}
        correo={this.state.data[i].email}  
        clikclo={logout}
          </Admin>
        })}
      </div>
        )
      }
      return ( 
      <Usuario 
      usert={tipouser} 
      nameuser={nombre}
      apellidos={apellido}
      correo={user.data.email}  
      clikclo={logout}/>
      )
    }
  
    const logout = async ()=>{
      console.log("Cerrar sesion")
      console.log(user.data.email)
      await firebase.auth().signOut();
      
    }
    return (
      <div>
        {
        !user.data && 
        <Container component="main" maxWidth="xs" isOpen={this.state.insertar}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <img src={logo} width="100%" height="100%"/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingresar
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                    color="primary"
                    name="nombreuser"
                    autoComplete="fusername"
                    variant="outlined"
                    required
                    fullWidth
                    id="userName"
                    label="Nombre de usuario"
                    autoFocus
                    inputProps={{
                      className:classes.input
                    }}
                    style={{
                      backgroundColor: "rgba(255,255,255,.5)"
                  }}
                  onChange={this.handleChange}
                  />
              <TextField
                color="primary"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                  className:classes.input
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar Contraseña"
              />
              <Button
                onClick={iniciar}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ingresar
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" style={{color:"inherit", textDecoration:"none"}} variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Components/Sign up/Sign up" variant="body2" style={{color:"inherit", textDecoration:"none"}}>
                    {"¿No tienes cuenta? Resgistrate"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      }
      {
            user.data &&
            <div>
            <AoU comp={tipouser} />
          </div>
      }
      </div>
      );
  }

}
export default SignIn;
*/
