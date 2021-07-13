import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import TextField from './TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Paper } from '@material-ui/core';
import Result from './Result'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '30ch',
      
    },
  },
  fondo:{
    backgroundColor: "#fceee3",
    //padding: theme.spacing(8),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: '#8f0304', 
    color:"#fceee3"
  },

}));

   

var esalud;

const Calculadora = () => {
  const [stack, setStack] = useState("");
  const [msj, setmsj] = useState("");
  const [estado, setestado] = useState("");
  const [altura, setaltura] = useState("");
  const [peso, setpeso] = useState("");

  function handleChange(name,value) {
    if (name === "Altura") {
      setaltura(value)
  } else {   
    setpeso(value)
  }
       
  }

  function handleSubmit() {
      setStack(stack + peso/(altura*altura))
      if(peso/(altura*altura)>30){
        setmsj("Su imc es de:");
          setestado(estado+"Usted tiene obesidad")
         esalud='"#ca0404"';
      }else{
        setmsj("Su imc es de:");
        setestado(estado+"Usted esta sano")
        esalud='"rgb(4, 228, 4)"';
      }
  }

  console.log("Altura: ", altura);
  console.log("peso: ", peso);
  console.log("imc:", stack );
  console.log("estado:", estado );
  console.log("estado salud:", esalud );
  
  const classes = useStyles()
    return (
    
      <Grid item xs={12} md={6} >
         <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
        Calculadora IMC
        </Typography>
        <Typography>Calcula tu IMC con tu altura en metros y tu peso en kg.</Typography>
      </Paper>
        <Box  component="span" className={classes.fondo}>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField atributo = {
            {
                name: "Altura",
                label: "Ingrese su altura",
                type: "number"
            }
        }
        handleChange = { handleChange } >
        </TextField>
        <TextField atributo = {
            {
                name: "Peso",
                label: "Ingrese su peso",
                type: "number"
            }
        }
        handleChange = { handleChange } >
        </TextField>
        <Button variant="contained" style={{color:"#000", background:"#c1d5db"}} 
        onClick = { handleSubmit }
        >Aceptar</Button>
    </form>
   
    <Result value ={stack} imc={msj} colors={esalud} sano={estado} ></Result>
        </Box>
    </Grid>    
      
    )
}

export default Calculadora;