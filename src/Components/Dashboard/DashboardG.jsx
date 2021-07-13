import React from 'react'
import {BrowserRouter as Router2
    ,Switch as S2
    ,Route as R2
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

import Dashboard from '../Dashboard/Dashboard'
import NewCliente from '../NewCliente/NewCliente'
import NewPago from '../NewPago/NewPago'
import ClientesG from '../Clientes/Clientes'
import PagosG from '../Pagos/Pagos'
import ECliente from '../Clientes/ModCliente'
import ElimCliente from '../Clientes/ElimClientes'
//import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));
const DashboardG = () => {
//ESTILOS
const classes = useStyles();

return ( 
    <Router2>
        <div className={classes.root}>
        <Dashboard/>
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <S2>
                         <R2 exact path='/'>
                            <h2>Bienvenido!</h2> 
                        </R2>
                        <R2 path = '/tcli'>
                            <ClientesG/>
                        </R2>
                        <R2 path = '/tpag'>
                            <PagosG/>
                        </R2>
                        <R2 path = '/ncli'>
                            <NewCliente/>
                        </R2>
                        <R2 path = '/ecli'>
                            <ECliente/>
                        </R2>
                        <R2 path = '/dcli'>
                            <ElimCliente/>
                        </R2>
                        <R2 path = '/npag'>
                            <NewPago/>
                        </R2>
                        <R2>
                            <h2>No hay nada</h2>
                        </R2>
                    </S2>
                </Paper>
                </Grid>
                </Grid>
            </Container>
            </main>
            </div>  
    </Router2>
);
}

export default DashboardG
