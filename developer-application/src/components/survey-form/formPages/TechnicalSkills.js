
import { useSelector } from 'react-redux';
import classes from './TechnicalSkills.module.css';
export const TechnicalSkills = () => {
    const skills = useSelector(state => state.skills.skills);

    return <div className={classes.page}>
        
    </div>
}