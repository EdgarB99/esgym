import React,{useState,useEffect} from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container, Divider} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseApp, useUser } from 'reactfire';

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
    submit: {
      margin: (3, 0, 2),
    },
  });

const Pagos = () => {

    //Conexion 
    const firebase= useFirebaseApp();
    const [pagos, setPagos] = useState([]);
    const classes = useStyles();

     //PROCESO DE ELIMINACIÓN POR USER
     function deletePag (c){
      console.log(c);  
      firebase.database().ref(`Pagos/${c}`).remove()
    }

    //APLICACION DE USEFFECT PARA EL MAPEADO
    useEffect(() => {
      firebase.database().ref('Pagos').on('value',(pagos) => {
        let ArregloPag = []
        try{
          pagos.forEach((pagos)=>{
            let newPag = {
              clave: pagos.val().clave,
              dia: pagos.val().dia,
              monto: pagos.val().monto,
              pagoid: pagos.val().pagoid,
            }
            ArregloPag.push(newPag)
          })
          setPagos(ArregloPag)
        }catch(error){
          console.log(error)
          setPagos(null)
        }
      }
    )}, [])
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" justify="center" alignItems="center">
                <Typography variant="h4" justify="center" >Lista de pagos</Typography>
                <Grid container direction="row" spacing={3}>
                <>
                    {pagos.map(pago => {
                          return(
                            <Grid item xs md={4} lg={4} xl={4}>
                            <Card key={pago.pagoid+pago.clave} className={classes.root}>
                            <CardContent>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Clave: {pago.clave}
                              </Typography>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Pago por:
                              </Typography>
                              <Typography variant="h5" component="h3">
                                $ {pago.monto}
                              </Typography>
                              <Typography className={classes.pos} color="textSecondary">
                                Al Usuario:
                              </Typography>
                              <Typography variant="h5" component="h3">
                                {pago.pagoid}
                              </Typography>
                              <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Fecha del pago: {pago.dia}
                              </Typography>
                            </CardContent>
                            <CardActions>
                            <Button variant="contained" size="small" color="secondary" className={classes.submit}
                              onClick={() => deletePag(pago.pagoid+pago.clave)}>Cacelar Pago</Button>
                            </CardActions>
                            </Card>
                            </Grid>
                        )
                    })}
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
