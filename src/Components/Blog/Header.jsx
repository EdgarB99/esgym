import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import logo from '../img/logo.PNG'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
   // borderBottom: `1px solid ${theme.palette.divider}`,
    //backgroundColor: '#bd102d',
    backgroundColor: '#ca0404',
    //borderRadius: '10px',
  },
  toolbarTitle: {
    flexGrow:1,
    display:'flex'
  },
  cajatitulo:{
    display:'block'
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    //backgroundColor: '#bd102d',
    backgroundColor: '#8f0304',
    color:'#fff'
    //borderRadius: '10px',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  colorbtn:{
    color: '#fff',
  },
  logot:{
    flexGrow:1, 
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} >
      <Box className={classes.toolbarTitle}>
        <IconButton className={classes.cajatitulo}>
        <img src={logo} alt="logo" width="120px" />
        </IconButton>
        </Box>
        
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
        >
          {title}
        </Typography>
        {/*
        <IconButton>
          <SearchIcon className={classes.colorbtn} />
        </IconButton>*/
        }
        <Link to="/Components/Sign up/Sign up" style={{ textDecoration: 'none' }}>
        <Button size="small" className={classes.colorbtn}>Registrate</Button>
        </Link>
        <Link to="/Components/Sign in/Sign in" style={{ textDecoration: 'none' }}>
        <Button  size="small" className={classes.colorbtn}>
          Ingresa
        </Button>
        </Link>
        
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            color="inherit"
            
            key={section.title}
            variant="body2"
            className={classes.toolbarLink}
            to={section.to}  
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};