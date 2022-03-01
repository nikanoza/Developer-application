import React from 'react'
import classes from './Main.module.css';

const Main = () => {
 return(
 <div className={classes.main}>
    <div className={classes.title}>
        Welcome Rocketeer !
    </div>
    <button className={classes['btn-start']}>Start Questionnaire</button>
    <div className={classes['applications']}>
       <a href='#'>Submitted Applications</a>
    </div>
    <div className={classes['rocket-img']}>
        <img src='/images/rocketman.png'/>
    </div>
 </div>)
}

export default Main