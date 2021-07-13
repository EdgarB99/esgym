import React from 'react'
import PropType from 'prop-types';
import { Container, Typography, Button, CssBaseline, Grid} from '@material-ui/core';
import Header from '../Blog/Headus';
import DashboardG from '../Dashboard/DashboardG';


const sections = [
    { title: 'Inicio', to:"/Components/Blog/Blog" },
    { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
    { title: 'Horarios', to:"/Components/Horarios/Horarios" },
    { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
  ];

const Admin = ({clikclo, usert, nameuser, nombre , apellidos, correo}) => {
  return (
      <div>
          <CssBaseline />
          <>
          <DashboardG/>
          <Header sections={sections} clikclo={clikclo} />
    <Container maxWidth="md">
        <Typography variant="h2">
            Bienvenido: {usert}
        </Typography>
        <Typography variant="h5">
            Nombre de usuario: {nameuser} 
        </Typography>
        <Typography variant="h5">
            Nombre: {nombre} 
        </Typography>
        <Typography variant="h5">
            Apellido: {apellidos}
        </Typography>
        <Typography variant="h5">
            Correo: {correo}
        </Typography>
        <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
        <Button variant="contained" 
        color="secondary">Registro de clientes</Button>
          </Grid>
          <Grid item xs={12} md={4}>
        <Button variant="contained" 
        color="secondary">Habilitar instructores</Button>
          </Grid>
          <Grid item xs={12} md={4}>
          <Button variant="contained" 
        color="secondary"
         onClick = {clikclo}>Cerrar sesión</Button>
          </Grid>
       
     </Grid>
    </Container>
    </>
    </div>
  )
}

Admin.PropType = {
  usert: PropType.string,
  nameuser: PropType.string,
  nombre: PropType.string,
  apellidos: PropType.string,
  correo: PropType.string,
  clicklo: PropType.func.isRequired
}


export default Admin
