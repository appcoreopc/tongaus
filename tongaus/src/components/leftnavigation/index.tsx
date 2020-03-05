import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { HomePage_Load, Order_Page_Load, Settings_Page_Load, Marketing_Page_Load, Analytics_Page_Load, App_Page_Load} from "./actions";
import { connect } from 'react-redux'

const LeftNavigationSection = ({count, loadHomePage, loadSettingsPage, 
  loadAppPage, loadMarketingPage, loadAnalyticsPage, loadOrderPage}:any) => {
  
   return <nav className="sidenav">    
        <ul>
            
             <li>             
              <Link to="/" onClick={()=> loadHomePage()}>Home</Link>  </li>
             <li>                
                <Link to="/orders" onClick={() => {loadOrderPage('')}}>Order</Link></li>
             <li>                          
                <Link to="/marketing" onClick={() => loadMarketingPage('')}>Marketing</Link></li> 
             <li>                
                <Link to="/analytics" onClick={() => loadAnalyticsPage()}>Analytics</Link></li>          
             <li>           
                <Link to="/apps" onClick={() => loadAppPage('')}>Apps</Link></li>
            <li>
                <Link to="/settings" onClick={() => loadSettingsPage('setting page')}>Settings </Link></li>          
        </ul>
    </nav>
}

const mapStateToProps = (state: any) => ({
    count : state.count
  })
  
const mapDispatchToProps = (dispatch:any) => ({
    loadHomePage: () => dispatch(HomePage_Load('')),
    loadOrderPage:() => dispatch(Order_Page_Load('')),
    loadMarketingPage:() => dispatch(Marketing_Page_Load('')),
    loadAnalyticsPage:() => dispatch(Analytics_Page_Load('')),
    loadAppPage: () => dispatch(App_Page_Load('')),
    loadSettingsPage: () => dispatch(Settings_Page_Load(''))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavigationSection);