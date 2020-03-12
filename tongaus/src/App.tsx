import React, {createContext} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./components/leftnavigation/reducer";
import createSagaMiddleware from 'redux-saga'

import mySaga from './components/leftnavigation/navigationService';

import './App.css';
import loadable from '@loadable/component'

const Home = loadable(() => import("./scenes/home"));
const Setup = loadable(() => import("./scenes/setup"));
const Admin = loadable(() => import("./scenes/admin"));

const TopNavigation = loadable(() => import("./components/topnavigation"));
const LeftNavigation = loadable(() => import("./components/leftnavigation"));
const IconNavigation = loadable(() => import("./components/leftnavigation/iconnavigation"));
const Footer = loadable(() => import("./components/footer"));
const DriverPage = loadable(() => import("./scenes/driver/index"));

// Setting up saga component /
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const ThemeContext = createContext('dark');

const App = () => {
  
  return (
    
    <Provider store={store}>
    
    <ThemeContext.Provider value="blue">
    
    <div className="App">
    
    <TopNavigation/> 
    <IconNavigation />
       
    <Router>
    
    <LeftNavigation/>        
    <div>   
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
    </div>
    </Router>
    
    
    <Footer/>
    </div>
    </ThemeContext.Provider>
    
    </Provider>
    );
  }
  
  
  export class Outlinecomponent extends React.Component {
        
    render() {
      let value = this.context;
      console.log(value);
      console.log(this.context);
      
      return <div> 
      
      <div> dadfafs</div>
      
      <ThemeContext.Consumer> 
      {(context) => (
        
        <div>
        <p> Name : {context}</p>
        </div>
        )}
        
        </ThemeContext.Consumer>
        
        </div>
      }
    }
    
    
    export default App;
    