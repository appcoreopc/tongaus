import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import loadable from '@loadable/component'

const Home = loadable(() => import("./scenes/home"));
const Setup = loadable(() => import("./scenes/setup"));
const Admin = loadable(() => import("./scenes/admin"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/settings">Setup</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </nav>

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
  