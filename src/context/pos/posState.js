import React , { useReducer } from 'react'
import PosContext from './posContext'
import PosReducer from './PosReducer';

const PosState = ({ children }) => {

    const [ state , dispatch ] = useReducer (PosReducer , {
        categoria_global:null ,
        mesa_global:null ,
        pedidos : []
    });

    const incrementarPlatoPedido = objPlato => {
        const { pedidos, mesa_global } = state; 
        if (!mesa_global) return 
        //1 . si la mesa estaba vacia , y es el primer plato del pedido 
        //2.  si la mesa tenia un pedido pero no tenia el plato , y vamos a 
        // crear el primer plato de ese pedido 
        let objPedidoActual = 
            pedidos.find(objPedido => objPedido.objMesa.mesa_id === mesa_global.mesa_id );
            // preguntamos si el objPedido actual , es un obj que existe ,
            // en caso contrario , el objPedidoActual seria "undefined"
            if(objPedidoActual){
                // significa que la mesa_global actual , ya tenia un pedido 
            } else {
                // significa que la mesa_global actual , esta vacio , no tenia ningun pedido 
                // agregamos el primer pedido de la mesa_actual con su primer plato 
                    pedidos.push({
                    estado : "pendiente",
                    objMesa : {
                        ...mesa_global
                    },
                    platos : [
                        {
                            ...objPlato,
                            cantidad: 1
                        }
                    ]
                })
            }
            //Entonces actualizamos el state global 
            dispatch({
                type: "ACTUALIZAR_PEDIDOS",
                data: pedidos
            })
    }

    const seleccionarCategoriaGlobal = objCategoria => {
        //intentar seleccionar o settear una categoria global
        dispatch({
           data: objCategoria,
           type: "SELECCIONAR_CATEGORIA"
        });

    }
    const seleccionarMesaGlobal = objMesa => {
        //intentar seleccionar o settear una categoria global
        dispatch({
           data: objMesa,
           type: "SELECCIONAR_MESA"
        });

    }

    return (
        <PosContext.Provider value = {{
            categoria_global: state.categoria_global,
            mesa_global: state.mesa_global,
            seleccionarCategoriaGlobal:seleccionarCategoriaGlobal,
            seleccionarMesaGlobal : seleccionarMesaGlobal,
            incrementarPlatoPedido : incrementarPlatoPedido
        }} >
            {children}
        </PosContext.Provider>
    )
}

export default PosState
