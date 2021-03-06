import React, { useEffect, useState } from 'react'
import {
  Grid, Button, Typography, TextField, CssBaseline, Container,
  InputLabel, MenuItem, FormControl, Select, Input,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseApp, useUser } from 'reactfire';


const useStyles = makeStyles((theme) => ({
  input: {
    color: "#000"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const NewPago = () => {
  const firebase = useFirebaseApp();
  const [dia, setdia] = useState("");
  //EVENTO DE MONTO O CANTIDAD
  const [values, setValues] = React.useState({
    amount: '',
  });

  const accionMonto = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  //EVENTO SET DE CAMBIO
  const [user, setUser] = React.useState('');

  const handleChange = (event) => {
    setUser(event.target.value);

    if(event.target.value===""){

    }else{
    lectura(event.target.value);
  }
  };

  const classes = useStyles();

  function lectura(clienteId) {
    const dbRef = firebase.database().ref();
    dbRef.child("Clientes").child(clienteId).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      }
      else {
        console.log("No data");
        sessionStorage.setItem('Id', 'Sin datos');
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  function lecturap(clienteId) {
    const dbRef = firebase.database().ref();
    dbRef.child("Pagos").child(clienteId).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      }
      else {
        console.log("No data");
        sessionStorage.setItem('Id', 'Sin datos');
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  const agregapago = () =>{
    writeUserData(user, values.amount, dia);
    lecturap(user);
  }
  
  function writeUserData(pagoId, monto, day) {
    const key = Math.floor(Math.random() * 100000);
    firebase.database().ref('Pagos/' + pagoId+key).set({
      clave: key,
      pagoid: pagoId,
      monto: monto,
      dia: day,
    }, (error) => {
    if (error) {
      // The write failed...
    } else {
      // Data saved successfully!
    }
  });
  // [END rtdb_write_new_user_completion]
  }

  /*<FormControl className={classes.formControl} >
              <InputLabel id="selectUser">Nombre de usuario</InputLabel>
              <Select
                labelId="selectUser"
                id="selectUserSimple"
                value={user}
                onChange={handleChange}
              >
                {clientes.map((index,cli) => {
                   return <MenuItem value={cli}>{index}</MenuItem>
                  }
                )}
                
              </Select>
            </FormControl>
            */

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.child("Clientes").get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      }
      else {
        console.log("No data");
      }
    }).catch((error) => {
      console.error(error);
    });
    console.log('Entramos en el use');
  }
    , []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h2">Agregar Pago</Typography>
        <Typography variant="h6">Asegurese de ingresar la cantidad correcta.</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={10} lg={10}>
          <TextField
              color="secondary"
              name="nombreus"
              autoComplete="fnombreus"
              variant="outlined"
              required
              fullWidth
              id="fechaP"
              label="Nombre de usuario"
              autoFocus
              inputProps={{
                className: classes.input
              }}

              style={{
                backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>

            <FormControl fullWidth className={classes.margin}>
              <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={values.amount}
                onChange={accionMonto('amount')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}

                inputProps={{
                  className: classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
                }} />
            </FormControl>

          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              color="secondary"
              name="fechaP"
              autoComplete="ffecha"
              variant="outlined"
              required
              fullWidth
              id="fechaP"
              label="Fecha de pago"
              autoFocus
              type="Date"
              inputProps={{
                className: classes.input
              }}

              style={{
                backgroundColor: "rgba(255,255,255,.5)"
              }}
              onChange={(e)=> setdia(e.target.value)}
            />
          </Grid>
          <Grid container justify="center" alignItems="center" >
            <Grid item sm={10} md={10} lg={5} xl={5} spacing={4}>
              <Button fullWidth variant="contained" color="secondary" 
              onClick={agregapago}
              className={classes.submit}>
                Agregar</Button>
            </Grid>
            <Grid item sm={10} md={10} lg={5} xl={5}>
              <Button fullWidth variant="contained" color="secondary" className={classes.submit}>
                Cancelar </Button>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}


export default NewPago;
