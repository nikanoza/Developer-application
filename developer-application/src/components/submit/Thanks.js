
import { useNavigate } from 'react-router-dom';
import classes from './Thanks.module.css';
const Thanks = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/main');
    },3000)

    return <div className={classes.page}>
        <div className={classes.text}>
            Thanks for Joining 😊
        </div>
    </div>
}

export default Thanks;