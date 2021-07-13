import React from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container, Divider, Table} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useFirebaseApp } from 'reactfire';


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#000"
    },
    submit: {
        margin: theme.spacing(2, 0, 1),
      },
      margen: {
          marginTop:theme.spacing(2),
      },
  }));

const ModCliente = () => {
  const firebase = useFirebaseApp();
    const classes = useStyles();
    const [nombreus, setnombreus] = useState("");
    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");
    const [email, setemail] = useState("");
    const [tiposu, settiposu] = useState("");
    const [dia, setdia] = useState("");

    function writeUserData(userId, name, lname, email, tsus, day) {
      firebase.database().ref('Clientes/' + userId).set({
        nombreuser: userId,
        nombre: name,
        apellido: lname,
        email: email,
        tiposus:tsus, 
        diapago: day
      }, (error) => {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    });
    // [END rtdb_write_new_user_completion]
    }


    function lectura1(clienteId) {
      const dbRef = firebase.database().ref();
      dbRef.child("Clientes").child(clienteId).get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setnombre(snapshot.val().nombre);
          setapellido(snapshot.val().apellido);
          setemail(snapshot.val().email);
          settiposu(snapshot.val().tiposus);
          setdia(snapshot.val().diapago);
        }
        else {
          console.log("No data");
          setnombreus("");
          setnombre("");
          setapellido("");
          setemail("");
          settiposu("");
          setdia("");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  
    const handleChange = (event) => {
      setnombreus(event.target.value);
  
      if(event.target.value===""){
  
      }else{
      lectura1(event.target.value);
    }
    };
  
    const editar =()=>{
      writeUserData(nombreus,nombre,apellido,email,tiposu,dia);
      console.log("Usuario editado")
      console.log(nombre)
    }

    
    const cancelar =()=>{
      setnombreus("");
          setnombre("");
          setapellido("");
          setemail("");
          settiposu("");
          setdia("");
    }
  return (
      <div>
    <CssBaseline />
    <Container maxWidth="sm">
    <Typography variant="h3">Editar datos del cliente</Typography>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12}>
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
            type=""
            inputProps={{
              className:classes.input
            }}

            style={{
              backgroundColor: "rgba(255,255,255,.5)"
          }}
          onChange={handleChange}
          />
        </Grid>
        <Button
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Buscar cliente
      </Button>
    </Grid>
    </Container>
    <Container className={classes.margen}>
    <Divider/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="userName"
                autoComplete="fusername"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Nombre de usuario"
                autoFocus
                value={nombreus}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="Name"
                autoComplete="fname"
                variant="standard"
                required
                fullWidth
                id="Name"
                label="Nombre"
                autoFocus
                value={nombre}
                onChange={(e)=> setnombre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="apellido"
                autoComplete="fapellido"
                variant="standard"
                required
                fullWidth
                id="apellido"
                label="Apellidos"
                autoFocus
                value={apellido}
                onChange={(e)=> setapellido(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="Tipo de suscripción"
                autoComplete="fsub"
                variant="standard"
                required
                fullWidth
                id="sub"
                label="Tipo de suscripción"
                autoFocus
                value={tiposu}
                onChange={(e)=> settiposu(e.target.value)}
              />
            </Grid>
           
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="fecha"
                autoComplete="ffecha"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Fecha de inicio"
                autoFocus
                value={dia}
                type="date"
                onChange={(e)=> setdia(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="fechaexp"
                autoComplete="ffechaexp"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Fecha de expiración"
                autoFocus
                value={dia}
                type="date"
                onChange={(e)=> setdia(e.target.value)}
              />
            </Grid>
            <Grid container justify="center" alignItems="center" >
            <Grid item sm={10} md={10} lg={5} xl={5} spacing={4}>
                <Button fullWidth variant="contained" color="secondary" 
                onClick={editar}
                className={classes.submit}> 
                    Agregar Cambios</Button>
            </Grid>
            <Grid item sm={10} md={10} lg={5} xl={5}>
                <Button  fullWidth variant="contained" color="secondary" 
                onClick={cancelar}
                className={classes.submit}>
                    Cancelar </Button>
            </Grid>
            </Grid>
        </Grid>
    </Container>
</div>
  )
}

export default ModCliente
