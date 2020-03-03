import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import loadable from '@loadable/component'

const Home = loadable(() => import("./scenes/home"));
const Setup = loadable(() => import("./scenes/setup"));
const Admin = loadable(() => import("./scenes/admin"));

const TopMessageBar = loadable(() => import("./components/topnavigation/topmessagebar"));
const TopNavigation = loadable(() => import("./components/topnavigation"));
const LeftNavigation = loadable(() => import("./components/leftnavigation"));


const App = () => {
  return (
    <div className="App">

      <TopMessageBar/>
      <TopNavigation/>

      <Router>

      <LeftNavigation/>

     
        <div>
        

        <Switch>
          <Route path="/settings">
            <Setup />           
          </Route>
          <Route path="/admin">     
             <Admin/>      
          </Route>
          <Route path="/">
            <Home/>           
          </Route>
        </Switch>
      </div>
    </Router>

      </div>
    );
  }
  
  export default App;
  