import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {BsCamera} from 'react-icons/bs';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import alberca from '../img/alber.jpg'
import instalaciones from '../img/Instalaciones.jpg'
import Hor from '../img/Hor.jpg'
import Header from '../Blog/Header'
import Footer from '../Blog/Footer';
import { useFirebaseApp, useUser } from 'reactfire';
import Headus from '../Blog/Headus';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const sections = [
  { title: 'Inicio', to:"/Components/Blog/Blog" },
  { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
  { title: 'Horarios', to:"/Components/Horarios/Horarios" },
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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
              Instalaciones
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
           Contamos con un espacio amplio en el cual puedes hacer tus ejercicos de manera comoda y segura.
            </Typography>
                      </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item key='card1' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={instalaciones}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Patio
                    </Typography>
                    <Typography>
                      Contamos con un amplio patio en el que puedes hacer ejercicio al aire libre.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>


              <Grid item key='card3' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={alberca}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Alberca
                    </Typography>
                    <Typography>
                     Si lo tuyo es querer refrescarte puedes darte un chapuzon en la alberca
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item key='card2' xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={Hor}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cardio
                    </Typography>
                    <Typography>
                     El cardio es muy importante si quieres perder calorias y he aquí el lugar perfecto.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

        
          </Grid>
        </Container>
      </main>
      {/* Footer */}
        <Footer/>
      {/* End footer */}
    </React.Fragment>
  );
}