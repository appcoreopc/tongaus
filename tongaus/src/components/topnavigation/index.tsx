import React from "react";
import { connect } from 'react-redux';

const TopNavigationBar = ({isLoggedIn, dispatch}:any) => (

   <div className="headerNavigation">
                           
    <p className="logo"><a href="#"><i className="fa fa-file-code-o" aria-hidden="true"></i></a></p>
    <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

    { isLoggedIn && <button>Login</button> }
    { !isLoggedIn && <button>Login</button> }
    
    </div>
)

export default connect()(TopNavigationBar);