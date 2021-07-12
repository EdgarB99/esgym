import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const input = ({ atributo, handleChange }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles()
  return (
  
        <TextField
        style={{
          backgroundColor: "rgba(0,0,0,.3)"
      }}
      InputProps={{
          style: {
              color: "white"
          }
      }}
          
        id="outlined-basic"
        name={atributo.name} 
        label={atributo.label} 
        type={atributo.type} 
        variant="filled" 
      
        onChange={(e) => handleChange(e.target.name, e.target.value)} />
   
  )
}

export default input;
