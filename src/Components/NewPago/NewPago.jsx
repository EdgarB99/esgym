import React from 'react'
import {Grid, Button, Typography, TextField, CssBaseline, Container,
    InputLabel, MenuItem,FormControl,Select,Input,
    InputAdornment} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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
    };

    const classes = useStyles();

    return (
        <>
        <CssBaseline />
        <Container maxWidth="md">
        <Typography variant="h2">Agregar Pago</Typography>
        <Typography variant="h6">Asegurese de ingresar la cantidad correcta.</Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={10} lg={10}>
            <FormControl className={classes.formControl}>
                <InputLabel id="selectUser">Nombre de usuario</InputLabel>
                <Select
                    labelId="selectUser"
                    id="selectUserSimple"
                    value={user}
                    onChange={handleChange}
                >
                    <MenuItem value={'Nombre1'}>Usuario1</MenuItem>
                    <MenuItem value={'Nombre2'}>Usuario2</MenuItem>
                    <MenuItem value={'Nombre3'}>Usuario3</MenuItem>
                </Select>
            </FormControl>
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
                className:classes.input
              }}

              style={{
                backgroundColor: "rgba(255,255,255,.5)"
            }}/>
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
                  className:classes.input
                }}

                style={{
                  backgroundColor: "rgba(255,255,255,.5)"
              }}
              />
            </Grid>
            <Grid container justify="center" alignItems="center" >
            <Grid item sm={10} md={10} lg={5} xl={5} spacing={4}>
                <Button fullWidth variant="contained" color="secondary" className={classes.submit}> 
                    Agregar</Button>
            </Grid>
            <Grid item sm={10} md={10} lg={5} xl={5}>
                <Button  fullWidth variant="contained" color="secondary" className={classes.submit}>
                    Cancelar </Button>
            </Grid>
            </Grid>
        </Grid>
  
        </Container>
        </>
    )
}

export default NewPago
