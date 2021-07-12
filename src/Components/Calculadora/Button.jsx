import React from 'react';
import PropType from 'prop-types';
import Button from '@material-ui/core/Button';

const button = ({ 
    color, variant,text, clickHandLer }) => {
    return ( 
    <Button
        variant={variant}
        color={color}
        onClick = {() => {
                console.log("We are on click");
                clickHandLer(text);
            }
        } >
        <span> { text } </span> 
        </Button>
    )
}

Button.PropType = {
    text: PropType.string.isRequired,
    color:PropType.string,
    variant:PropType.string,
    clickHandLer: PropType.func.isRequired
}

export default button;