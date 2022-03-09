import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux';
import classes from './Applicants.module.css';
import { Fragment, useState } from 'react';

const Applicants = () => {
    const [showApplicatnsArray, setShowApplicatnsArray] = useState([]);
    const aplicants = useSelector( state => state.applications.applications);
    const skills = useSelector(state => state.skills.skills);
    const showApplicant = (number) => {
        if(!showApplicatnsArray.includes(number)){
            setShowApplicatnsArray([
                ...showApplicatnsArray,
                number
            ]);
        }else{
            const arr = showApplicatnsArray;
            const index = arr.findIndex( num => num === number);
            const newArr = arr.splice(index, 1);
            setShowApplicatnsArray([...arr]);
        }
    }

    return <div className={classes.page}>
        <div className={classes.title}>
            Submitted Applications
        </div>
        {aplicants.map( (applicant, index) => <Fragment key={index}>
        <div className={classes['application-box']}>
            <div className={classes['box-left']} >
                {index + 1}
            </div>
            <button type='button' className={classes['btn-arrow']} onClick={() => {showApplicant(index)}}>
                <FontAwesomeIcon icon={showApplicatnsArray.includes(index) ? faAngleUp : faAngleDown} className={classes['icon-remove']}/>
            </button>
        </div>
        {showApplicatnsArray.includes(index) &&<div className={classes.info} key={index}>
            <div className={classes['info-top']}>
                <div className={classes.personalInfo}>
                    <div className={classes.groupTitle}>
                        Personal Information
                    </div>
                    <div className={classes['personal-info-group']}>
                        <div className={classes['personal-info-group-left']}>
                            First Name
                        </div>
                        <div className={classes['personal-info-group-right']}>
                            {applicant.first_name}
                        </div>
                    </div>
                    <div className={classes['personal-info-group']}>
                        <div className={classes['personal-info-group-left']}>
                            Last Name
                        </div>
                        <div className={classes['personal-info-group-right']}>
                            {applicant.last_name}
                        </div>
                    </div>
                    <div className={classes['personal-info-group']}>
                        <div className={classes['personal-info-group-left']}>
                            E Mail
                        </div>
                        <div className={classes['personal-info-group-right']}>
                            {applicant.email}
                        </div>
                    </div>
                    <div className={classes['personal-info-group']}>
                        <div className={classes['personal-info-group-left']}>
                            Phone
                        </div>
                        <div className={classes['personal-info-group-right']}>
                            {applicant.phone !== "NAN" ? applicant.phone : ''}
                        </div>
                    </div>
                </div>
                <div className={classes.skillset}>
                    <div className={classes.groupTitle}>
                        Skillset
                    </div>
                    {applicant.skills.map( skill => <div className={classes.skill} key={skill.id}>
                        <div className={classes['skill-left']}>
                            {skills[skill.id].title}
                        </div>
                        <div className={classes['skill-right']}>
                            Years of Experience: {skill.experience}
                        </div>
                    </div>)}
                </div>
            </div>
            <div className={classes['info-bottom']}>
                <div className={classes.covidSituation}>
                    <div className={classes.groupTitle}>
                        Covid Situation
                    </div>
                    <div className={`${classes['radio-group']} ${classes.set1}`}>
                        <div className={classes.question}>
                            how would you prefer to work?
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='work' defaultValue="from_office" 
                            defaultChecked={applicant.work_preference === "from_office"} 
                            />
                            <label>From Sairme Office</label>
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='work' defaultValue="from_home" 
                            defaultChecked={applicant.work_preference === "from_home"}
                            />
                            <label>From Home</label>
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='work' defaultValue="hybrid" 
                            defaultChecked={applicant.work_preference === "hybrid"}
                            />
                            <label>Hybrid</label>
                        </div>
                    </div>
                    <div className={`${classes['radio-group']} ${classes.set2}`}>
                        <div className={classes.question}>
                        Did you contact covid 19? :(
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='contactStatus' defaultValue="true"
                            defaultChecked={applicant.had_covid} 
                            />
                            <label>Yes</label>
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio"  name='contactStatus' defaultValue="false"
                            defaultChecked={!applicant.had_covid} 
                            />
                            <label>No</label>
                        </div>
                    </div>
                    <div className={classes['date-question']}>
                        <div className={classes.question}>
                            When did you have covid 19?
                        </div>
                        <input type="date" defaultValue={applicant.had_covid_at === '01-01-1900' ? '' : applicant.had_covid_at} /> 
                    </div>
                    <div className={`${classes['radio-group']} ${classes.set3}`}>
                        <div className={classes.question}>
                        Have you been vaccinated?
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='vaccineStatus' defaultValue="true"
                            defaultChecked={applicant.vaccinated} 
                            />
                            <label>Yes</label>
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" name='vaccineStatus' defaultValue="false"
                            defaultChecked={!applicant.vaccinated} 
                            />
                            <label>No</label>
                        </div>
                    </div>
                    <div className={classes['date-question']} style={{marginBottom: '222px'}}>
                        <div className={classes.question}>
                            When did you get your last covid vaccine?
                        </div>
                        <input type="date" defaultValue={applicant.vaccinated_at === '01-01-1900' ? '' : applicant.vaccinated_at}/> 
                    </div>
                </div>
                <div className={classes.insigts}>
                    <div className={classes.groupTitle}>
                        Insigts
                    </div>  
                    <div className={classes['radio-group']}>
                        <div className={classes.question}>
                        Would you attend Devtalks and maybe also organize your own?
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" defaultValue="true" name='devtalks' 
                            defaultChecked={applicant.will_organize_devtalk}
                            />
                            <label>Yes</label>
                        </div>
                        <div className={classes['radio-btn']}>
                            <input type="radio" defaultValue="false" name='devtalks'
                            defaultChecked={!applicant.will_organize_devtalk}   
                            />
                            <label>No</label>
                        </div>
                    </div> 
                    <div className={classes['area-group']}>
                        <div className={classes['area-title']}>
                            What would you speak about at Devtalk?
                        </div>
                        <textarea className={classes['about-Devtalk']} placeholder="I would..." 
                        defaultValue={applicant.devtalk_topic !== "NAN" ? applicant.devtalk_topic : ''}></textarea>
                    </div>  
                    <div className={classes['area-group']}>
                        <div className={classes['area-title']}>
                            Tell us something special
                        </div>
                        <textarea className={classes['about-me']}
                        defaultValue={applicant.something_special}></textarea>
                    </div>
                </div>
            </div>
        </div>}
        </Fragment>
        )}
    </div>
}

export default Applicants;

// devtalk_topic: "I would ..."
// email: "gelashvili@gela.ge"
// first_name: "gela"
// had_covid: true
// had_covid_at: "2022-02-23"
// last_name: "gelashvili"
// phone: "+995591933382"
// skills: [{…}]
// something_special: "I am special!"
// token: "85f24032-dbef-4cf2-b36e-bfa9f5f87156"
// vaccinated: true
// vaccinated_at: "2022-02-23"
// will_organize_devtalk: true
// work_preference: "from_home"