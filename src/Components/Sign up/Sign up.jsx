import React, {useState,useEffect} from 'react';
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
import "firebase/database";
import Usuario from '../Sesion/Usuario';
import Admin from '../Sesion/Admin';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: "#fff"
  },
}));

export default function SignUp() {
  const classes = useStyles();
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
  }}
  ,[]);

  function writeUserData(userId, name, lname, email, password, tipo) {
    firebase.database().ref('Usuarios/' + userId).set({
      nombreuser: userId,
      nombre: name,
      apellido: lname,
      email: email,
      contraseña:password, 
      tipou: tipo
    }, (error) => {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
  // [END rtdb_write_new_user_completion]

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

  function lectura(userId) {
    var starCountRef = firebase.database().ref('Usuarios/' + userId);
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
    
  }

  
  

  const submit = async () =>{
    console.log(nombreuser);
    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(password);
   await firebase.auth().createUserWithEmailAndPassword(email,password);  
   sessionStorage.setItem('Id', nombreuser);
    if(email==='correoAdmin1@hotmail.com'){
      settipouser('Administrador Principal');
      console.log(tipouser)
      writeUserData(nombreuser,nombre,apellido,email,password, 'Administrador Principal');
    }
    else{
      settipouser('Cliente');
      console.log(tipouser)
    writeUserData(nombreuser,nombre,apellido,email,password, 'Cliente');
    }
    lectura(nombreuser);
  }

  function AoU(comp) {

    if (comp==='Administrador Principal') {
      return (   
      <Admin 
      usert={tipouser} 
      nameuser={nombreuser}
      nombre={nombre}
      apellidos={apellido}
      correo={user.data.email}  
      clikclo={logout}/>)
    }
    return(    
    <Usuario 
    usert={tipouser} 
    nameuser={nombreuser}
    nombre={nombre}
    apellidos={apellido}
    correo={user.data.email}  
    clikclo={logout}/>)
  }


  const logout = async ()=>{
    console.log("Cerrar sesion")
    await firebase.auth().signOut();
    sessionStorage.setItem('Id', "Sin datos");
  }

  return (
    <div>
      {
        !user.data &&
    <Container  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={logo} width="100%" height="100%"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
              onChange={(ev)=> setnombreuser(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="primary"
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                inputProps={{
                  className:classes.input
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setnombre(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="primary"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellidos"
                name="Last Name"
                autoComplete="lname"
                inputProps={{
                  className:classes.input
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setapellido(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="primary"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
                inputProps={{
                  className:classes.input
                }}
                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setEmail(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="primary"
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Quiero recibir notificaciones en mi correo."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            Registrarte
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/Components/Sign in/Sign in" style={{ textDecoration: 'none', color:"inherit" }} variant="body2">
                ¿Ya tienes una cuenta? Ingresa
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    }
    {
      user.data &&
       
      <AoU comp={tipouser} />
      
    }
    </div>
  );
}