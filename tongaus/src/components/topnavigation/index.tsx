import React from "react";
import { connect } from 'react-redux';

const TopNavigationBar = ({dispatch}:any) => (

    <header className="messagebar">
                           
      <div className="nav-topbar"/>
                       
       <div className="nav-topbar__logo">
            
           <a href="/settings/pricing" className="button pink">Top navigation bar item</a>
           <a href="/settings/pricing" className="button pink">Top navigation bar item</a>
           <a href="/settings/pricing" className="button pink">Top navigation bar item</a>
           <a href="/settings/pricing" className="button pink">Top navigation bar item</a>
       
       </div>
                  
    </header>
)

export default connect()(TopNavigationBar);