import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Slidebar';
import Footer from './Footer';
import instalaciones from '../img/Instalaciones.jpg';
import alber from '../img/alber.jpg';
import promo from '../img/Promo.jpg'
import Calculadroa from '../Calculadora/Calculadora';
import Divider from '@material-ui/core/Divider'
import { useFirebaseApp, useUser } from 'reactfire';
import Headus from './Headus';
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    display: 'flex'
  },
  colort:{
    color:'#fff'
  }
}));

const sections = [
  { title: 'Inicio', to:"/Components/Blog/Blog" },
  { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
  { title: 'Horarios', to:"/Components/Horarios/Horarios" },
  { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
];

const mainFeaturedPost = {
  title: 'Cuando ves los resultados se convierte en una adicción.',
  description:
    "Espartanos Gym te ayuda a conseguir tus metas.",
  image: instalaciones,
  imgText: 'main image description',
  
};

const featuredPosts = [
  {
    title: 'Instalaciones',
    date: '2021',
    description:
      'Contamos con unas instalaciones bastante amplias ideales para que puedas disfrutar de tu entrenamiento.',
    image: instalaciones,
    imageText: 'Image Text',
    to: "/Components/Galeria/Galeria",
  },
  {
    title: 'Promociones',
    date: '2021',
    description:
      'Contamos con varias promociones, no te las puedes perder',
    image: promo,
    imageText: 'Image Text',
  },
  {
    title: 'Acerca de',
    date: '2021',
    description:
      'Nuestro gimansio esta ubicado en Uren Michoacan.',
    image: alber,
    imageText: 'Image Text',
  },
];



const sidebar = {
  title: 'Horario',
  description:
    'Horario de lunes a sábado.',
  archives: [
    { title: 'Lunes: 7:00 Am - 9:00 Pm' },
    { title: 'Martes: 7:00 Am - 9:00 Pm' },
    { title: 'Miercoles: 7:00 Am - 9:00 Pm' },
    { title: 'Jueves: 7:00 Am - 9:00 Pm',  },
    { title: 'Viernes: 7:00 Am - 9:00 Pm',  },
    { title: 'Sábado: 7:00 Am - 5:00 Pm',  },
    { title: 'Domingo: Cerrado',  },
  ],

};




export default function Blog() {
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
        <Container>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
    
          <Grid container spacing={5} className={classes.mainGrid}>
          <Calculadroa/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          
          </Grid>
        </main>
        </Container>
      <Footer title="Espartanos Gym" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}