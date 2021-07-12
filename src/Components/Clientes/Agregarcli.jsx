import React from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#000"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
      },
  }));

const Agregarcli = () => {
    const classes = useStyles();
  return (
    <div>
         <CssBaseline />
        <Container maxWidth="sm">
        <Typography variant="h2">Agregar Cliente</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="userName"
                autoComplete="fusername"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Nombre de usuario"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="Name"
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Nombre"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="apellido"
                autoComplete="fapellido"
                variant="outlined"
                required
                fullWidth
                id="apellido"
                label="Apellidos"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="Tipo de suscripción"
                autoComplete="fsub"
                variant="outlined"
                required
                fullWidth
                id="sub"
                label="Tipo de suscripción"
                autoFocus
                
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
           
            <Grid item xs={12} sm={6}>
            <TextField
                color="secondary"
                name="fecha"
                autoComplete="ffecha"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="Fecha de inicio"
                autoFocus
                type="Date"
                inputProps={{
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
            <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          
          >
            Agregar
          </Button>
        </Grid>
        </Container>
    </div>
  )
}

export default Agregarcli;