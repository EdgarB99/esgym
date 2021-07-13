import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import Skeleton from '@material-ui/lab/Skeleton'
import Iconos from '../Iconos/Iconos'
import {IconContext} from 'react-icons';
import { useHistory} from 'react-router-dom';



const renderListItem = eventAbre => (objs) => {

    const history = useHistory ()

    const openLink = enlace =>{
        console.log("Avrido");  
        //console.log(obj.path);
        history.push(enlace);
      }

    const {tipo,nombre, icono,path}=objs

    return (
        <ListItem key={tipo} onClick ={() => openLink(path)} button>
        <ListItemIcon>
        <IconContext.Provider value={{size:'2em'}}>
                {
                  objs ? 
                  <Iconos value={icono}/>
                  :
                  <Skeleton variant="circle" height={80} width={80} ></Skeleton>
                }
        </IconContext.Provider>
        </ListItemIcon>
        <ListItemText primary={nombre} />
        </ListItem>
        )
    }
    
const Items = ({lista, eventAbre}) => {

    return (
        <List>
            <div>
                {lista.map(objs=>renderListItem(eventAbre)(objs))}
            </div>
        </List>
        
    )
}

Items.propTypes = {
    lista:PropTypes.arrayOf(
        PropTypes.shape({
            tipo:PropTypes.string.isRequired,
            nombre:PropTypes.string.isRequired,
            icono:PropTypes.string.isRequired
        })
    ).isRequired,
    eventAbre: PropTypes.func,
}

export default Items
