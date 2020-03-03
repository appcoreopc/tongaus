import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const LeftNavigationSection = () => (
   
    <nav className="sidenav">    
        <ul>
         <li> <Link to="/">Home</Link>  </li>
            <li><Link to="/analytics">Order</Link></li>
            <li><Link to="/analytics">Marketing</Link></li>
            <li><Link to="/analytics">Analytics</Link>Analytics</li>
            <li><Link to="/apps">Apps</Link></li>
            <li><Link to="/settings">Settings</Link></li>          
        </ul>
    </nav>
);


export default LeftNavigationSection;