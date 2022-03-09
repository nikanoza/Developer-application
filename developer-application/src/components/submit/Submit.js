
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postDate } from '../../store/redux/developerInfo-actions';
import classes from './Submit.module.css';
const Submit = () => {

    const navigate = useNavigate();
    const navigationStatuses = useSelector( state => state.navigationStatus);
    const dataObject = useSelector(state => state.formInfo);

    useEffect(() => {
        if(!navigationStatuses.aboutPage || !navigationStatuses.covidInformationPage ||
            !navigationStatuses.personalInfoPage || !navigationStatuses.technicalSkillPage){
                navigate('/survey-form/1');
        }
    }, [navigationStatuses.aboutPage, navigationStatuses.covidInformationPage, 
        navigationStatuses.personalInfoPage, navigationStatuses.technicalSkillPage,
        navigate
    ])

    const submitData = () => {
        postDate(dataObject);
        navigate('/thanks');
    }

    return <div className={classes['submit-page']}>
        <button type='button' className={classes['btn-submit']} onClick={ submitData }>
            Submit
        </button>
        <div className={classes.back}>
            <Link to='/survey-form/4'>go back</Link>
        </div>
    </div>
}

export default Submit;

