import React from "react";
import {DriverAppDeleteIconCard, DriverAddIconCard, DriverUpdateIconCard}  from "../../components/appIconcard";
import styles from "./driver.module.css";

const DriverPage = () => {
   
   return <div className='workspace'>


         <div>Driver page </div>      

         <DriverAddIconCard title='Add driver' style={styles.demoicon}></DriverAddIconCard>
         <DriverUpdateIconCard title='Add driver' style={styles.demoicon}></DriverUpdateIconCard>
         <DriverAppDeleteIconCard title='Add driver' style={styles.demoicon}></DriverAppDeleteIconCard>


         </div>
   
}


export default DriverPage;