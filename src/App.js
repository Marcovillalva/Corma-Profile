import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './component/Pages/Home';
import Servicios from './component/Pages/Servicios';
import Contacto from './component/Pages/Contacto';
import Pageerror404 from './component/Pages/Pageerror404';

// function App() {
//   return (
//     <div>
     
//     </div>
//   );
// }

<BrowserRouter>
 <Switch>
    <Route exact path="Home" Component={Home}/>
    <Route exact path="Servicios" Component={Servicios}/>
    <Route exact path="Contacto" Component={Contacto}/>
    <Route exact path="Pageerror404" Component={Pageerror404}/>
 </Switch>
</BrowserRouter>

import { format } from 'path';
import Home from './component/Pages/Home';
import Servicios from './component/Pages/Servicios';
import Contacto from './component/Pages/Contacto';
import Pageerror404 from './component/Pages/Pageerror404';

export default App;


<Route render={() => ('./component/Pages/Servicios') />}