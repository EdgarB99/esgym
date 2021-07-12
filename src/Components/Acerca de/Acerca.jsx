import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../Blog/Header'
import Footer from '../Blog/Footer';
import { useFirebaseApp, useUser } from 'reactfire';
import Headus from '../Blog/Headus';
//import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

const Map = (props)=>{
  return {

  };
}
const sections = [
    { title: 'Inicio', to:"/Components/Blog/Blog" },
    { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
    { title: 'Horarios', },
    { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
  ];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));


export default function Album() {
  const classes = useStyles();
  const firebase= useFirebaseApp();
  const user= useUser();
 
  const logout = async ()=>{
    console.log("Cerrar sesion")
    console.log(user.data.email)
    await firebase.auth().signOut();
  }
  return (
    <React.Fragment>
      <CssBaseline />
      {
        !user.data &&
        <Header sections={sections}  />
      }
      {
        user.data &&
        <Headus sections={sections} clikclo={logout} />
      }
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Acerca de
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
           Nos ubicamos en Uren Michoacan, Carretera Nacional #1.
           Estamos para servrile.
            </Typography>
                      </Container>
        </div>
      </main>
      {/* Footer */}
        <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}