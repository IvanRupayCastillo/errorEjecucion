import React , { useState , useContext , useEffect } from 'react'
import PosContext from '../../../../context/pos/posContext';
import { getMesas } from '../../../../services/mesaServices';

const PosMesas = () => {

    const [ mesas , setMesas ] = useState([]);
    const [ cargando , setCargando ] = useState (true)
    const { seleccionarMesaGlobal , mesa_global } = useContext(PosContext);
    
   
    useEffect (()=>{
        
        getMesas().then (data =>{
            console.log(data.ok);
            if (data.ok){
                setMesas (data.content);
                setCargando(false);     
            }
           
        });

    }, [])

    return (
        <div className="mesas">
        <ul className="mesas__lista">
        {
          cargando ?
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Cargando ... </span>
        </div>:
            mesas.map(objMesa =>{
                return (
                 <li className = {
                  mesa_global?.mesa_id === objMesa.mesa_id ? "mesas__mesa activo": ""
                }  
                  key = {objMesa.mesa_id}
                                    onClick= {()=>{
                    seleccionarMesaGlobal(objMesa);
                  }}>
                    <span className="mesas__titulo">Mesa</span>
                    <span className="mesas__numero">{objMesa.mesa_nro}</span>
                  </li>      
                )
            })
        }

          {/* <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">01</span>
          </li> */}
          {/* <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa activo">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li>
          <li className="mesas__mesa">
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">02</span>
          </li> */}
        </ul>
        <div className="mesas__info"></div>
      </div>
     
    )
}

export default PosMesas
