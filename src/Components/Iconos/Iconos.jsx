import react from 'react'
import PropTypes from 'prop-types'
import {IoAccessibility,IoHandRightOutline,IoAlertCircleOutline,
    IoExit,IoReaderOutline,IoConstructOutline,IoAdd } from "react-icons/io5";
import {HiCurrencyDollar,HiUserAdd,HiHome,HiCash} from "react-icons/hi"


const porNombre = {
    todos: IoAccessibility,
    vencidos: IoHandRightOutline,
    avencer: IoAlertCircleOutline,
    nuevo: HiUserAdd,
    nuevop: HiCurrencyDollar,
    editar: IoConstructOutline,
    eliminar: IoAdd,
    home:HiHome,
    his:IoReaderOutline,
    pagog:HiCash,
    salir:IoExit
}

const renderIcon = value => {
    const Iconos = porNombre[value]
    if (Iconos !== undefined){
        const Iconos = porNombre["nuevo"]
    }
    return <Iconos/>
}
const Iconos = ({value}) => {
    return (
        <>
            {renderIcon(value)}
        </>
    )
}

export const vValidos=[
    "todos","vencidos","avencer","nuevo","nuevop","editar","eliminar","his","salir","pagog","home"]

Iconos.propTypes = {
    value :  PropTypes.oneOf(vValidos).isRequired
}

export default Iconos
