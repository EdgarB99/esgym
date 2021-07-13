import react from 'react'
import PropTypes from 'prop-types'
import {IoAccessibility,IoHandRightOutline,IoAlertCircleOutline,
    IoExit,IoReaderOutline,IoConstructOutline,IoAdd } from "react-icons/io5";
import {HiCurrencyDollar,HiUserAdd,HiUser,HiCash} from "react-icons/hi"


const porNombre = {
    todos: IoAccessibility,
    vencidos: IoHandRightOutline,
    avencer: IoAlertCircleOutline,
    nuevo: HiUserAdd,
    nuevop: HiCurrencyDollar,
    editar: IoConstructOutline,
    eliminar: IoAdd,
    his:IoReaderOutline,
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
    "todos","vencidos","avencer","nuevo","nuevop","editar","eliminar","his","salir"]

Iconos.propTypes = {
    value :  PropTypes.oneOf(vValidos).isRequired
}

export default Iconos
