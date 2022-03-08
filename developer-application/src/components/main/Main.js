import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Main.module.css';

const Main = () => {
 return(
 <div className={classes.main}>
    <div className={classes.title}>
        Welcome Rocketeer !
    </div>
    <button className={classes['btn-start']}>
        <Link to='/survey-form/1'>Start Questionnaire</Link>
    </button>
    <div className={classes['applications']}>
       <Link to='/applicants'>Submitted Applications</Link>
    </div>
    <div className={classes['rocket-img']}>
        <img src='/images/rocketman.png' alt=''/>
    </div>
 </div>)
}

export default Main