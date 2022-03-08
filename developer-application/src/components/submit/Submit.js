
import { Link } from 'react-router-dom';
import classes from './Submit.module.css';
const Submit = () => {
    return <div className={classes['submit-page']}>
        <button type='button' className={classes['btn-submit']}>
            Submit
        </button>
        <div className={classes.back}>
            <Link to='/survey-form'>go back</Link>
        </div>
    </div>
}

export default Submit;