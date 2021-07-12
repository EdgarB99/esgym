import React from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container, Divider, Table} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#000"
    },
    submit: {
        margin: theme.spacing(2, 0, 1),
      },
      margen: {
          marginTop:theme.spacing(2),
      },
  }));

const Editarcli = () => {
    const classes = useStyles();
  return (
      <div>
    <CssBaseline />
    <Container maxWidth="sm">
    <Typography variant="h3">Editar datos del cliente</Typography>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12}>
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
            type=""
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
        color="secondary"
        className={classes.submit}
      >
        Buscar cliente
      </Button>
    </Grid>
    </Container>
    <Container className={classes.margen}>
    <Divider/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="userName"
                autoComplete="fusername"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Nombre de usuario"
                autoFocus
                
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="Name"
                autoComplete="fname"
                variant="standard"
                required
                fullWidth
                id="Name"
                label="Nombre"
                autoFocus
                
              
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="apellido"
                autoComplete="fapellido"
                variant="standard"
                required
                fullWidth
                id="apellido"
                label="Apellidos"
                autoFocus
                
              
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="Tipo de suscripción"
                autoComplete="fsub"
                variant="standard"
                required
                fullWidth
                id="sub"
                label="Tipo de suscripción"
                autoFocus
                
                
              />
            </Grid>
           
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="fecha"
                autoComplete="ffecha"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Fecha de inicio"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <TextField
                color="secondary"
                name="fechaexp"
                autoComplete="ffechaexp"
                variant="standard"
                required
                fullWidth
                id="userName"
                label="Fecha de expiración"
                autoFocus
              />
            </Grid>
            <Button
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Agregar Cambios
      </Button>
        </Grid>
    </Container>
</div>
  )
}

export default Editarcli