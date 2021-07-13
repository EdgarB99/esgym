import React, {useState,useEffect} from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseApp, useUser } from 'reactfire';
import { useHistory} from 'react-router-dom';
import  'firebase/auth';
import "firebase/database";
import Alert from '@material-ui/lab/Alert'



const useStyles = makeStyles((theme) => ({
    input: {
      color: "#000"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

const NewCliente = () => {
    const classes = useStyles();
    const [nombreuser, setnombreuser] = useState(null);
    const [email, setEmail] = useState(null);
    const [tiposus, settiposus] = useState(null);
    const [nombre, setnombre] = useState(null);
    const [apellido, setapellido] = useState(null);
    const [dia, setdia] = useState(null);
    const firebase= useFirebaseApp();
    const user= useUser();
    //ENLACE
    const history = useHistory ()
    //ALERTA
    const [error, setError] = useState(null)
    const [valid, setValid] = useState(null)


    function writeUserData(clienteId, name, lname, email, tiposus, day) {
      firebase.database().ref('Clientes/' + clienteId).set({
        nombreuser: clienteId,
        nombre: name,
        apellido: lname,
        email: email,
        tiposus:tiposus, 
        diapago: day
      }, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    })};
    
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
        }
        else {
          console.log("No data");
          sessionStorage.setItem('Id', 'Sin datos');
        }
      }).catch((error) => {
        console.error(error);
      })};

    const refresh = () =>{
      setnombreuser(null)
      setEmail (null);
      settiposus (null);
      setnombre(null);
      setapellido(null);
      setdia(null);
    }
    const refresh2 = () =>{
      setnombreuser(null)
      setEmail (null);
      settiposus (null);
      setnombre(null);
      setapellido(null);
      setdia(null);
      history.push('/Components/Dashboard/DashboardG');
    }

    const agrega = () =>{
      if (nombreuser===null || nombre===null || apellido===null 
        || email===null || tiposus===null || dia===null ){
          console.log("Vacio")
          setError("Campos vacios o faltantes de llenar")
      }else{
        console.log(nombreuser);
        console.log(nombre);
        console.log(apellido);
        console.log(email);
        console.log(tiposus);
        console.log(dia);
        
       writeUserData(nombreuser, nombre, apellido, email, tiposus, dia);
       lectura(nombreuser);
       setValid("Datos ingresados con éxito")
       refresh()
      }

    }
  
  
  return (
    <div>
         <CssBaseline />
        <Container maxWidth="md">
        <Typography variant="h2">Agregar Cliente</Typography><br />
        {
                error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>
            }
            {
                valid && <Alert severity="success" onClose={() => setValid(history.push('/Components/Dashboard/DashboardG'))}>{valid}</Alert>
            }
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
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
                color="secondary"
                name="Name"
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="Name"
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
                color="secondary"
                name="apellido"
                autoComplete="fapellido"
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellidos"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setapellido(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="correo"
                autoComplete="fsub"
                variant="outlined"
                required
                fullWidth
                id="corr"
                label="Correo Electrónico"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setEmail(ev.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="Tipo de suscripción"
                autoComplete="fsub"
                variant="outlined"
                required
                fullWidth
                id="sub"
                label="Tipo de suscripción"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> settiposus(ev.target.value)}
              />
            </Grid>
           
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="fecha"
                autoComplete="ffecha"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Fecha de inicio"
                autoFocus
                type="Date"
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(ev)=> setdia(ev.target.value)}
              />
            </Grid>
            <Grid container justify="center" alignItems="center" >
            <Grid item sm={10} md={10} lg={5} xl={5} spacing={4}>
                <Button fullWidth variant="contained" color="secondary" 
                onClick={agrega}
                className={classes.submit}> 
                    Agregar</Button>
            </Grid>
            <Grid item sm={10} md={10} lg={5} xl={5}>
                <Button  fullWidth variant="contained" color="secondary" 
                className={classes.submit}  onClick={refresh2}>
                    Cancelar </Button>
            </Grid>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default NewCliente