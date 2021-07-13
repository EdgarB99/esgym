import React,{useEffect,useState}from 'react'
import {Grid, Button, Typography, CssBaseline, Container} from '@material-ui/core';
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
      background: '#eFeFeF',
      
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

const Clientes = () => {

    //Conexion 
    const firebase= useFirebaseApp();
    const [clientes, setClientes] = useState([]);
    const classes = useStyles();

    //PROCESO DE ELIMINACIÓN POR USER
    function deleteCli (c){
      console.log("Eliminado");  
      firebase.database().ref(`Clientes/${c}`).remove()
    }

    useEffect(() => {
      firebase.database().ref('Clientes').on('value',(clientes) => {
        let ArregloClis = []
        try{
          clientes.forEach((clientes)=>{
            let newCli = {
              apellido: clientes.val().apellido,
              diapago: clientes.val().diapago,
              email:clientes.val().email,
              nombre:clientes.val().nombre,
              nombreuser:clientes.val().nombreuser,
              tiposus:clientes.val().tiposus,
            }
            ArregloClis.push(newCli)
          })
          setClientes(ArregloClis)
        }catch(error){
          console.log(error)
          setClientes(null)
        }
      }
    )}, [])

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg" justify="center" alignItems="center">
                <Typography variant="h4" justify="center" >Lista de clientes</Typography>
                <Grid container direction="row" spacing={3}>
                <>
                    {clientes.map(cliente =>{ 
                      return (
                        <Grid item xs md={4} lg={4} xl={4}>
                            <Card key={cliente.nombreuser} className={classes.root}>
                        <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Correo: {cliente.email}
                        </Typography>
                        <Typography variant="h5" component="h3">
                          {cliente.nombre} {cliente.apellido}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          Usuario: {cliente.nombreuser}
                        </Typography>
                        <Typography variant="body2" component="p">
                          Fecha de pago:   {cliente.diapago}
                        </Typography>
                        <Typography variant="body2" component="p">
                          Tipo de subscripción:   {cliente.tiposus}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Button variant="contained" size="small" color="secondary" className={classes.submit}
                        onClick={() => deleteCli(cliente.nombreuser)}>Eliminar</Button>
                        </CardActions>
                        </Card>
                        </Grid>
                      )}
                      )}
                </>            
                </Grid>
            </Container>
        </>
    )
}

Clientes.propTypes = {
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

export default Clientes
