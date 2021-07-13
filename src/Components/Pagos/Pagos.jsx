import React from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container, Divider} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

/*OPCION PARA VER LOS PAGOS*/


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      position: 'relative',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  
//Variables
const Example1 =[
    {idpag: 1, fechapag: '08/12/2021',user: 'usuario1', monto:234},
    {idpag: 2, fechapag: '08/12/2021',user: 'usuario2', monto:50}, 
    {idpag: 3, fechapag: '08/12/2021',user: 'usuario1', monto:234},
    {idpag: 4, fechapag: '08/12/2021',user: 'usuario3', monto:200},
    {idpag: 5, fechapag: '08/12/2021',user: 'usuario4', monto:150},
    {idpag: 6, fechapag: '08/12/2021',user: 'usuario4', monto:150},
    {idpag: 7, fechapag: '08/12/2021',user: 'usuario5', monto:300},

]

const renderCardList = eventC => (objs) =>{

    const {idpag,fechapag,user,monto} = objs
    const classes = useStyles();

    return(
        <Grid item xs md={4} lg={4} xl={4}>
        <Card key={idpag} className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {fechapag}
          </Typography>
          <Typography variant="h5" component="h3">
            {user}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Usuario
          </Typography>
          <Typography variant="body2" component="p">
            Cantidad de pago: ${monto}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Eliminar Pago</Button>
        </CardActions>
        </Card>
        </Grid>
    )
}
const eventC = () => {
    console.log("Avrido");  
    //console.log(obj.path);
   // history.push(enlace);
  }

const Pagos = () => {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" justify="center" alignItems="center">
                <Typography variant="h4" justify="center" >Lista de pagos</Typography>
                <Grid container direction="row" spacing={3}>
                <>
                    {Example1.map(obj => renderCardList(eventC)(Example1))}
                </>            
                </Grid>
            </Container>
        </>
    )
}

Pagos.propTypes = {
    Example1:PropTypes.arrayOf(
        PropTypes.shape({
            idpag: PropTypes.number.isRequired,
            fechapag:PropTypes.string.isRequired,
            user:PropTypes.string.isRequired,
            monto:PropTypes.number.isRequired
        })
    ).isRequired,
    eventC: PropTypes.func,
}

export default Pagos
