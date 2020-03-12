
import React from "react";
import styles from "./appIcon.module.css"

export const DriverAddIconCard = ({title, style}:any) => {

 return (
    <div className={styles.cardLayout}><div> <i className={style}> &#xf234; </i> </div>
         <div className={styles.cardText}>{title}</div>
    </div>)
}

export const DriverUpdateIconCard = ({title, style}:any) => {

 return (
    <div>
      <i className={style}>&#xe801; </i>
         <div>{title}</div>
    </div>)
}

export const DriverAppDeleteIconCard = ({title, style}:any) => {

    return (
       <div>
         <i className={style}>&#xf235;</i>
            <div>{title}</div>
       </div>)
   }

export default DriverAddIconCard;
