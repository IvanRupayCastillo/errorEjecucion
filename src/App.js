import React from 'react'
import {BrowserRouter , Switch , Route } from  "react-router-dom" ;
import PosState from './context/pos/posState';
import AuthRouter from './modules/auth/AuthRouter';
import PosRouter from './modules/pos/PosRouter';

const App = () => {
  return (
   <BrowserRouter>
   <Switch>
    <PosState>
      <Route path = "/pos" component={PosRouter}/>
    </PosState>
       
    <Route path = "/auth" component={AuthRouter}/>
    <Route/>
    <Route/>
    <Route/>
   </Switch>
   
   </BrowserRouter>
  )
}

export default App
