import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../Blog/Header'
import Footer from '../Blog/Footer'
import { useFirebaseApp, useUser } from 'reactfire';
import Headus from '../Blog/Headus';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const sections = [
    { title: 'Inicio', to:"/Components/Blog/Blog" },
    { title: 'Instalaciones', to:"/Components/Galeria/Galeria" },
    { title: 'Horarios', to:"/Components/Horarios/Horarios" },
    { title: 'Acerca de',  to:"/Components/Acerca de/Acerca" },
  ];

function createData(Hora, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo) {
  return {Hora, Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo };
}

const rows = [
  createData('8:00 am - 2:00 pm', 'Instructor 1', 'Instructor 1', 'Instructor 1', 'Instructor 1', 'Instructor 1', 'Instructor 1','Instructor 1'),
  createData('4:00 pm - 9:00 pm', 'Instructor 2', 'Instructor 2', 'Instructor 2', 'Instructor 2', 'Instructor 2', 'Instructor 2','Instructor 2'),
];

const Horarios = ( ) => {
  const classes = useStyles();
  const firebase= useFirebaseApp();
  const user= useUser();
 
  const logout = async ()=>{
    console.log("Cerrar sesion")
    console.log(user.data.email)
    await firebase.auth().signOut();
  }
  return (
      <div>
    {
        !user.data &&
        <Header sections={sections}  />
      }
      {
        user.data &&
        <Headus sections={sections} clikclo={logout} />
      }
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario de instructores</TableCell>
            <TableCell align="right">Hora</TableCell>
            <TableCell align="right">Lunes</TableCell>
            <TableCell align="right">Martes</TableCell>
            <TableCell align="right">Miercoles</TableCell>
            <TableCell align="right">Jueves</TableCell>
            <TableCell align="right">Viernes</TableCell>
            <TableCell align="right">Sabado</TableCell>
            <TableCell align="right">Domingo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Hora}</TableCell>
              <TableCell align="right">{row.Lunes}</TableCell>
              <TableCell align="right">{row.Martes}</TableCell>
              <TableCell align="right">{row.Miercoles}</TableCell>
              <TableCell align="right">{row.Jueves}</TableCell>
              <TableCell align="right">{row.Viernes}</TableCell>
              <TableCell align="right">{row.Sabado}</TableCell>
              <TableCell align="right">{row.Domingo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Footer></Footer>
    </div>
  )}

  export default Horarios