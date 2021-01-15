import React from 'react'
import { Switch, Route } from "react-router-dom" ;
import PosPedidoScreen from './screens/pedido/PosPedidoScreen';
const PosRouter = () => {
    return (
        <Switch>
            <Route path = "/pos/pedido" component = {PosPedidoScreen} />
        </Switch>
    )
}

export default PosRouter
