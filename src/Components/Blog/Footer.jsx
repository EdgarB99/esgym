import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core'
import { TiSocialFacebook, TiSocialInstagram,TiSocialYoutube } from "react-icons/ti";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Edgar B. Cesar M.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    //backgroundColor: '#12151f',
    backgroundColor: '#000',
    color:'#fff',
     marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  offset: theme.mixins.toolbar,
  root: {
      flexGrow: 1,
    },
rs:{
  marginTop:theme.spacing(10),
    
}

}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
     <Container maxWidth="md" className={classes.rs}>
                    <Grid container justify="center"
                        spacing={1}>
                        <Grid container justify="center"
                            item lg={4}
                            spacing={3}>
                            <ul>
                               <Typography variant="subtitle1">
                                 Uren Michoacan Carretera Nacional #1
                               </Typography>
                            </ul>
                        </Grid>
                        <Grid container justify="center"
                            item lg={4}
                            spacing={3} >

                            <ul>
                            <Typography variant="subtitle1">
                                 Espartanos Gym
                               </Typography>
                            </ul>
                        </Grid>
                        <Grid container justify="center"
                            item lg={4}
                            spacing={3} >

                            <ul >
                            <Typography variant="subtitle1">
                                
                               </Typography>
                            </ul>
                        </Grid>
                    </Grid>
            <div className={classes.rs}>
                <Grid container justify="center" spacing={1}>

                    <Grid container justify="center"
                        item lg={4}
                        spacing={3}>
                        <IconButton color="inherit">
                            <TiSocialFacebook></TiSocialFacebook>
                        </IconButton>
                    </Grid>
                    <Grid container justify="center"
                        item lg={4}
                        spacing={3} >
                        <IconButton color="inherit">
                            <TiSocialInstagram></TiSocialInstagram>
                        </IconButton>
                    </Grid>
                    <Grid container justify="center"
                        item lg={4}
                        spacing={3} >
                        <IconButton color="inherit">
                            <TiSocialYoutube></TiSocialYoutube>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
            <Box mt={8}>
        <Copyright />
      </Box>
                </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};