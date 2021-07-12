import React from 'react'
import {} from '@material-ui/core';
import PropType from 'prop-types';
import { Container, Typography, Button, CssBaseline, Grid} from '@material-ui/core';
import Header from '../Blog/Headus';
import { useFirebaseApp, useUser } from 'reactfire';
import Headus from '../Blog/Headus';


const sections = [
    { title: 'Inicio', to:"/Components/Blog/Blog" },
    { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
    { title: 'Horarios', to:"/Components/Horarios/Horarios" },
    { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
  ];

const EntrenamientosCli = () => {
  const firebase= useFirebaseApp();
  const user= useUser();
 
  const logout = async ()=>{
    console.log("Cerrar sesion")
    console.log(user.data.email)
    await firebase.auth().signOut();
    sessionStorage.setItem('Id', "");
  }
  return (
    
      <div>
          <CssBaseline />
        <Header sections={sections} clikclo={logout} />
    <Container maxWidth="md">
        <Typography variant="h2">
            Mi suscripción
        </Typography>
        <Typography variant="h4">
            Suscripción: Activa 
        </Typography>
        <Typography variant="h4">
            Tipo de suscripción: Mensualidad  
        </Typography>
        <Typography variant="h4">
            Fecha de inicio: 08/Julio/2021 
        </Typography>
        <Typography variant="h4">
            Fecha de expiración: 08/Agosto/2021
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
          <Button variant="contained" 
        color="secondary">Volver</Button>
          </Grid>
       
     </Grid>
    </Container>
    </div>
  )
}



export default EntrenamientosCli;
