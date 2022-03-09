import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';
import { navigationStatusActions } from '../../../store/redux/navigationStatus-slice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import classes from './TechnicalSkills.module.css';
import Pagination from '../Pagination';

export const TechnicalSkills = () => {
    const dispatch = useDispatch();
    const [program, setProgram] = useState('skills');
    const [year, setYear] = useState('');
    const [showError,setShowError] = useState(false);

    const skills = useSelector(state => state.skills.skills);
    const userSkils = useSelector(state => state.formInfo.skils);

    const programsChangeHandler = (event) => {
        setProgram(event.target.value);
    };

    const yearChangeHandler = (event) => {
        if(+event.target.value > 0 || event.target.value === ''){
            setYear(event.target.value);
        }
    }

    const addSkillsHandler = () => {
        const ides = userSkils.slice().map( skill => skill.id );
        const id = skills.findIndex( skill => skill.title === program);
        if(!ides.includes(id) && program !== 'skills' && year !== ''){
            dispatch(developerInfoActions.addSkill({id: id, year: year}));
            setProgram('skills');
            setYear('');
            setShowError(false);
        }
    }

    const removeSkillhandler = (title) => {
        if(userSkils.length === 1) setShowError(true);
        dispatch(developerInfoActions.removeSkill(title));
    }


    if(userSkils.length > 0){
        dispatch(navigationStatusActions.updateStatus({property: 'technicalSkillPage', status: true}));
    }else{
        dispatch(navigationStatusActions.updateStatus({property: 'technicalSkillPage', status: false}));
    }    

    return <div className={classes.page}>
        <div className={classes.title}>
            Tell us about your skills
        </div>
        <div className={classes['form-group']}>
            <select onChange={programsChangeHandler} value={program}>
                <option>skills</option>
                {skills.map( skill => <option key={skill.id} value={skill.title}>{skill.title}</option>)}
            </select>
            <input type='number' placeholder='Experience Duration in Years' value={year} onChange={yearChangeHandler}/>
            <button type='button' className={classes['btn-add']} onClick={addSkillsHandler}>Add Programming Language</button>
        </div>
        {showError && <div className={classes['error-message']}>
            *skills should include 1 or more skill       
        </div>}
        <div className={classes.skills}>
            {userSkils.map( (skill, index) => <div key={index} className={classes.skill}>
               <div>{skills[skill.id].title}</div>
               <div>Years of Experience: {skill.experience}</div>
               <button type='button' className={classes['btn-remove']} onClick={()=> { removeSkillhandler(skill.title)}}>
                <FontAwesomeIcon icon={faMinus} className={classes['icon-remove']}/>
               </button>
            </div> )}
        </div>
        <Pagination className={classes.pagination}/>
    </div>
}