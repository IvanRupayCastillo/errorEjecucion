import React, { useContext, useEffect, useState } from 'react'
import PosContext from '../../../../context/pos/posContext';
import { getPlatosByCategoriaId } from '../../../../services/categoriaServices';
import PosPlato from './PosPlato';

const PosPlatos = () => {

  const [platos , setPlatos] = useState([]);
  const [cargando , setCargando] = useState (true); 
  const { categoria_global } = useContext(PosContext);

  useEffect(() => {
    setCargando(true);
    if(categoria_global){

      getPlatosByCategoriaId(categoria_global.categoria_id).then(data => {
        console.log(data)
        if (data.ok){
          setPlatos(data.content.Platos);
          setCargando(false);
        }
    })
  }
  }, [categoria_global]);

    return (
        <div className="carta__platos">
          {
            categoria_global?
              cargando ? 
              <div className= "text-light">Cargando </div>:
             (
                platos.map (objPlato => {
                return  <PosPlato objPlato = {objPlato} key = {objPlato.plato_id}/>
                })
             )
   :
              <h4 className = "text-light">
              Ninguna Categoria ha sido seleccionada </h4>
          }
          {/* {


            categoria_global?
              cargando ?
                <div className= "text-light">Cargando </div>:
                ( 
                  {
                   platos.map (objPlato => {
                     return  <PosPlato objPlato = {objPlato} key = {objPlato.plato_id}/>
                  })
                )
             :
            <h4 className = "text-light">
              Ninguna Categoria ha sido seleccionada </h4>
          } */}
       
          <PosPlato/>
          <PosPlato/>
          <PosPlato/>
          <PosPlato/>
          <PosPlato/>

     </div>
    )
}

export default PosPlatos
