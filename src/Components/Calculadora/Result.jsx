import React from 'react';
import PropType from 'prop-types';
import { Typography } from '@material-ui/core';

const Result = ({ value, imc, sano, colors}) => {

    //Objeto props para obtener las variables
    //const {user,active,value} = props;

    console.log("El valor es: ", value);

    return ( 
    <div className = "Result" >
         <Typography variant="h5" >{imc}</Typography>
        <span > { value } </span> 
        <Typography variant="h5" style={{color:{colors}}}>{sano}</Typography>
        </div>
    )


}

Result.PropType = {
    value: PropType.string.isRequired,
    imc: PropType.string,
    colors:PropType.string,
    sano:PropType.string
}

Result.defaultProps = {
    value: "0",
}

export default Result;