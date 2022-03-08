import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import classes from './TechnicalSkills.module.css';
import Pagination from '../Pagination';
export const TechnicalSkills = () => {
    const dispatch = useDispatch();
    const [program, setProgram] = useState('skills');
    const [year, setYear] = useState('');

    const skills = useSelector(state => state.skills.skills);
    const userSkils = useSelector(state => state.formInfo.skils);

    const programsChangeHandler = (event) => {
        setProgram(event.target.value);
    };

    const yearChangeHandler = (event) => {
        setYear(event.target.value);
    }

    const addSkillsHandler = () => {
        const titles = userSkils.slice().map( skill => skill.title );
        if(!titles.includes(program) && program !== 'skills'){
            dispatch(developerInfoActions.addSkill({title: program, year: year}));
            setProgram('skills');
            setYear('');
        }
    }

    const removeSkillhandler = (title) => {
        dispatch(developerInfoActions.removeSkill(title));
    }
    return <Fragment>
    <div className={classes.page}>
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
        <div className={classes.skills}>
            {userSkils.map( (skill, index) => <div key={index} className={classes.skill}>
               <div>{skill.title}</div>
               <div>Years of Experience: {skill.experience}</div>
               <button type='button' className={classes['btn-remove']} onClick={()=> { removeSkillhandler(skill.title)}}>
                <FontAwesomeIcon icon={faMinus} className={classes['icon-remove']}/>
               </button>
            </div> )}
        </div>
        <Pagination className={classes.pagination}/>
    </div>
    </Fragment>
}