import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ItemOp from '../Lista/Items'
import ListSubheader from '@material-ui/core/ListSubheader';
import {useHistory} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//Listas
const clientes = [
  {tipo:"tcli", nombre:"Todos los clientes", icono:"todos", path:'/Components/Clientes/Clientes'},
  //{tipo:"cli", nombre:"Clientes vencidos", icono:"vencidos"},
  //{tipo:"rcli", nombre:"Clientes regulares", icono:"avencer", path:'/rcli'},
  {tipo:"ecli", nombre:"Editar cliente", icono:"editar", path:'/Components/Clientes/ModCliente'},
  //{tipo:"dcli", nombre:"Eliminar cliente", icono:"editar", path:'/Components/Clientes/ElimClientes'},

]
const pagos = [
  {tipo:"tpag", nombre:"Todos los pagos", icono:"pagog", path:'/Components/Pagos/Pagos'},
  //{tipo:"pag", nombre:"Pagos vencidos", icono:"vencidos"},
]
const oprapida = [
  {tipo:"ncli", nombre:"Nuevo cliente", icono:"nuevo",  path:'/Components/NewCliente/NewCliente'},
  {tipo:"npag", nombre:"Nuevo pago", icono:"nuevop",  path:'/Components/NewPago/NewPago'},
  {tipo:"sal", nombre:"Cerrar Sesión", icono:"salir",  path:'/sal'},
]


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, //lo dejamos en 24 para que nunca se cierre
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,

  },
  appBar: {
    backgroundColor:'#bd102d',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    backgroundColor:'#bd102d',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory ()

  const onclickHandler = enlace =>{
      console.log("Avrido");  
      //console.log(obj.path);
      history.push(enlace);
    }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar} >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Panel de Administracion
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListSubheader inset>Clientes</ListSubheader>
        <ItemOp lista={clientes} /*eventAbre={onclickHandler("/")}*//>
        <Divider />
        <ListSubheader inset>Pagos</ListSubheader>
        <ItemOp lista={pagos} /*eventAbre={onclickHandler("/")}/*//>
        <Divider />
        <ListSubheader inset>Acciones</ListSubheader>
        <ItemOp lista={oprapida} /*eventAbre={onclickHandler("/")}}*//>
      </Drawer>
    </>
  );
}