import React from "react";
import AppIconCard from "../../components/appIconcard";
import styles from "./driver.module.css";

const DriverPage = () => {
   
   let driverFeatures = [
      {
         title : 'New Driver', 
         link : '/drivernew'
      },
      {
         title : 'Update Driver', 
         link : '/driverupdate'
      },
      {
         title : 'Delete Driver', 
         link : '/driverdelete'
      },
   ]
   
   let features = driverFeatures.map((a) => 
   <AppIconCard title={a.title} link={a.link}></AppIconCard>
   );
   
   return <div className='workspace'>
   
   <div>Driver page </div>      
   
    <i className={styles.demoicon}> &#xe800; </i>
   
         {features}         
   </div>
   
}


export default DriverPage;