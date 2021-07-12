import React from 'react'
import {} from '@material-ui/core';
import PropType from 'prop-types';
import { Container, Typography, Button, CssBaseline, Grid} from '@material-ui/core';
import Header from '../Blog/Header';


const sections = [
    { title: 'Inicio', to:"/Components/Blog/Blog" },
    { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
    { title: 'Horarios', to:"/Components/Horarios/Horarios" },
    { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
  ];

const EntrenamientosCli = () => {
  return (
      <div>
          <CssBaseline />
        <Header sections={sections}  />
    <Container maxWidth="md">
        <Typography variant="h2">
            Mis Entrenamientos: 
        </Typography>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
          <Button variant="contained" 
        color="secondary">Ver</Button>
          </Grid>
       
     </Grid>
    </Container>
    </div>
  )
}



export default EntrenamientosCli;
