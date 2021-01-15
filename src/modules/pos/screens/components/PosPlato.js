import React, { useContext } from 'react'
import PosContext from '../../../../context/pos/posContext';

const PosPlato = (  { objPlato }) => {

    const { incrementarPlatoPedido  } = useContext(PosContext);
    return (
        <>
        <div className="carta__plato">
          <img
            src= {objPlato.plato_img}
            alt="" />
          <h4 className="carta__titulo">{objPlato.plato_nom}</h4>
          <span className="carta__precio">{objPlato.plato_pre}</span>
          <div className="carta__botones">
            <button className="boton boton-outline-primary boton-restar">
              -1
            </button>
            <button className="boton boton-outline-primary boton-sumar"
            onClick= {()=>{
              incrementarPlatoPedido(objPlato);
            }}>
              +1
            </button>
          </div>
        </div>
        </>
    )
}

export default PosPlato
