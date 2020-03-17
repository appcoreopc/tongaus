
import React, {createContext} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import loadable from '@loadable/component';

const Home = loadable(() => import("../scenes/home"));
const Setup = loadable(() => import("../scenes/setup"));
const Admin = loadable(() => import("../scenes/admin"));
const DriverPage = loadable(() => import("../scenes/driver"));

const Routes = () => (
      
    <Switch>
        
      <Route path="/settings">
         <Setup />           
      </Route>
    
      <Route path="/driver">
        <DriverPage />           
      </Route>
    
      <Route path="/admin">     
          <Admin/>      
      </Route>

      <Route path="/">
        <Home/>           
      </Route>

    </Switch>

)

export default Routes;