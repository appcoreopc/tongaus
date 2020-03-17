import React, {createContext} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./components/leftnavigation/reducer";
import createSagaMiddleware from 'redux-saga'

import mySaga from './components/leftnavigation/navigationService';

import './App.css';
import loadable from '@loadable/component';
import Routes from "./routes//routes";
import { SettingIcon, SettingText } from "./components/leftnavigation/settingNavigation";

const TopNavigation = loadable(() => import("./components/topnavigation"));
const LeftNavigation = loadable(() => import("./components/leftnavigation"));
const IconNavigation = loadable(() => import("./components/leftnavigation/iconnavigation"));

const Footer = loadable(() => import("./components/footer"));

// Setting up saga component //
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

interface Employee { 

   name? : string, 
   email? : string  

}

var emp = {name : "JEremy", Email : "kepung@gmail.com"}

const ThemeContext = createContext<Employee>(emp);

const App = () => {
  
  return (
    
    <Provider store={store}>
    
    <ThemeContext.Provider value={emp}>
    
    <div className="App">
    
    <TopNavigation/> 
    <IconNavigation />

         
    <Router>
      <Routes></Routes>         
      <LeftNavigation/>        
      <SettingIcon />
      <SettingText />
      

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
        <p> Name : {context.name}</p>
        </div>
        )}
        
        </ThemeContext.Consumer>
        
        </div>
      }
    }
    
    
    export default App;
    