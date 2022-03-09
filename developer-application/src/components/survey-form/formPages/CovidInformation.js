
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';
import { navigationStatusActions } from '../../../store/redux/navigationStatus-slice';
import Pagination from '../Pagination';

import classes from './CovidInformation.module.css';
const CovidInformation = () => {
    const [showWorkError, setShowWorkError] = useState(false);
    const [showCovidStatusError, setCovidStatusError] = useState(false);
    const [showVaccineStatusError, setShowVaccineStatusError] = useState(false);

    const dispatch = useDispatch();
    const userCovidInfo =  useSelector( state => state.formInfo.covidInfo);
    const navigationStatus = useSelector( state => state.navigationStatus.covidInformationPage);

    const workStatusChangeHandler = (event) => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'workAt', value: event.target.value}));
        setShowWorkError(true);
    }
    const covidStatusChangeHandler = (event) => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'status', value: event.target.value === 'true'}));
        if(event.target.value === 'false'){
            dispatch(developerInfoActions.updateCovidInfo({property: 'covidLastDate', value: ''}))
        }
        setCovidStatusError(true);
    }

    const vaccineStatusChangeHandler = (event) => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'vaccine', value: event.target.value === 'true'}));
        if(event.target.value === 'false'){
            dispatch(developerInfoActions.updateCovidInfo({property: 'lastVaccineDate', value:''}));
        }
        setShowVaccineStatusError(true);
    }

    const covidDateChangeHandler = (event) => {
       dispatch(developerInfoActions.updateCovidInfo({property: 'covidLastDate', value: event.target.value}))
    }

    const vaccineDateCgangeHandler = (event) => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'lastVaccineDate', value: event.target.value}));
    }

    const canGoNextPage = () => {
        const work = userCovidInfo.workAt !== '';
        const covidStatus = userCovidInfo.status !== '';
        const covidDate = (userCovidInfo.status !== '' && userCovidInfo.covidLastDate !== '') || (userCovidInfo.status === false && userCovidInfo.covidLastDate === '');
        const vaccineStatus = userCovidInfo.vaccine !== '';
        const vaccineDate = (userCovidInfo.vaccine !== '' && userCovidInfo.lastVaccineDate !== '') || (userCovidInfo.vaccine === false && userCovidInfo.lastVaccineDate === '');
        const isValid = work && covidStatus && covidDate && vaccineStatus && vaccineDate;
        console.log(work , covidStatus , covidDate , vaccineStatus , vaccineDate);
        if(isValid){
            dispatch(navigationStatusActions.updateStatus({property: 'covidInformationPage', status: true}));
        }else{
            if(navigationStatus){
                dispatch(navigationStatusActions.updateStatus({property: 'covidInformationPage', status: false}));
            }
        }
    }

    canGoNextPage();
    return <div className={classes.page}>
        <div className={classes.title}>
            Covid Stuff
        </div>
        <div className={`${classes['radio-group']} ${classes.set1}`}>
            <div className={classes.question}>
                how would you prefer to work?
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='work' value="From Sairme Office" 
                checked={userCovidInfo.workAt === "From Sairme Office"} 
                onChange={workStatusChangeHandler}
                />
                <label>From Sairme Office</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='work' value="From Home" 
                checked={userCovidInfo.workAt === "From Home"} onChange={workStatusChangeHandler}
                />
                <label>From Home</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='work' value="Hybrid" 
                checked={userCovidInfo.workAt === "Hybrid"} onChange={workStatusChangeHandler}
                />
                <label>Hybrid</label>
            </div>
        </div>
        {userCovidInfo.workAt === '' && showWorkError && <div className={classes['error-message']}>
            *Should Choose one of the options
        </div>}
        <div className={`${classes['radio-group']} ${classes.set2}`}>
            <div className={classes.question}>
            Did you contact covid 19? :(
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='contactStatus' value="true"
                checked={userCovidInfo.status} onChange={covidStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio"  name='contactStatus' value="false"
                checked={!userCovidInfo.status && userCovidInfo.status !== ''} onChange={covidStatusChangeHandler}
                />
                <label>No</label>
            </div>
        </div>
        {userCovidInfo.status === '' && showCovidStatusError && <div className={classes['error-message']}>
            *Should Choose one of the options
        </div>}
        {userCovidInfo.status && <div className={classes['date-question']}>
                <div className={classes.question}>
                    When?
                </div>
                <input type="date" value={userCovidInfo.covidLastDate} 
                onChange={covidDateChangeHandler}/> 
        </div>}
        {userCovidInfo.status && userCovidInfo.covidLastDate === '' && <div className={classes['error-message']}>
            *date can not be empty
        </div>}
        <div className={`${classes['radio-group']} ${classes.set3}`}>
            <div className={classes.question}>
            Have you been vaccinated?
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='vaccineStatus' value="true"
                checked={userCovidInfo.vaccine} onChange={vaccineStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='vaccineStatus' value="false"
                checked={!userCovidInfo.vaccine && userCovidInfo.vaccine !== ''} onChange={vaccineStatusChangeHandler}
                />
                <label>No</label>
            </div>
        </div>
        {userCovidInfo.vaccine === '' && showVaccineStatusError && <div className={classes['error-message']}>
            *Should Choose one of the options
        </div>}        
        {userCovidInfo.vaccine && <div className={classes['date-question']} style={{marginBottom: '20px'}}>
                <div className={classes.question}>
                    When did you get your last covid vaccine?
                </div>
                <input type="date" value={userCovidInfo.lastVaccineDate}
                onChange={vaccineDateCgangeHandler}
                /> 
        </div>}
        {userCovidInfo.vaccine && userCovidInfo.lastVaccineDate === '' && <div className={classes['error-message']}>
            *date can not be empty
        </div>}
        <Pagination className={classes.pagination}/>
    </div>
}

export default CovidInformation;