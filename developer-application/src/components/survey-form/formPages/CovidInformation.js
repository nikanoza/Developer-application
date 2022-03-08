
import { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';
import Pagination from '../Pagination';

import classes from './CovidInformation.module.css';
const CovidInformation = () => {
    const dispatch = useDispatch();
    const [workStatus, setWorkStatus] = useState('');
    const [covidStatus, setCovidStatus] = useState('');
    const [vaccineStatus, setVaccineStatus] = useState('');
    const [covidDate, setCovidDate] = useState('Date');

    useEffect(() => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'workAt', value: workStatus}));
    }, [workStatus,dispatch]);

    useEffect(() => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'status', value: covidStatus === 'true'}));
    }, [covidStatus, dispatch]);

    useEffect(() => {
        dispatch(developerInfoActions.updateCovidInfo({property: 'vaccine', value: vaccineStatus === 'true'}));
    }, [vaccineStatus,dispatch]);

    const workStatusChangeHandler = (event) => {
        setWorkStatus(event.target.value);
    }
    const covidStatusChangeHandler = (event) => {
        setCovidStatus(event.target.value);
    }

    const vaccineStatusChangeHandler = (event) => {
        setVaccineStatus(event.target.value);
    }

    const covidDateChangeHandler = (event) => {
        setCovidDate(event.target.value);
        console.log(covidDate);
    }

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
                checked={workStatus === "From Sairme Office"} 
                onChange={workStatusChangeHandler}
                />
                <label>From Sairme Office</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='work' value="From Home" 
                checked={workStatus === "From Home"} onChange={workStatusChangeHandler}
                />
                <label>From Home</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='work' value="Hybrid" 
                checked={workStatus === "Hybrid"} onChange={workStatusChangeHandler}
                />
                <label>Hybrid</label>
            </div>
        </div>
        <div className={`${classes['radio-group']} ${classes.set2}`}>
            <div className={classes.question}>
            Did you contact covid 19? :(
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='contactStatus' value="true"
                checked={covidStatus === 'true'} onChange={covidStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio"  name='contactStatus' value="false"
                checked={covidStatus === 'false'} onChange={covidStatusChangeHandler}
                />
                <label>No</label>
            </div>
        </div>
        {covidStatus === 'true'&& <div className={classes['date-question']}>
                <div className={classes.question}>
                    When?
                </div>
                <input type="date" value="Date" onChange={covidDateChangeHandler}/> 
        </div>}
        <div className={`${classes['radio-group']} ${classes.set3}`}>
            <div className={classes.question}>
            Have you been vaccinated?
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='vaccineStatus' value="true"
                checked={vaccineStatus === 'true'} onChange={vaccineStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" name='vaccineStatus' value="false"
                checked={vaccineStatus === 'false'} onChange={vaccineStatusChangeHandler}
                />
                <label>No</label>
            </div>
        </div>
        {vaccineStatus === 'true' && <div className={classes['date-question']} style={{marginBottom: '20px'}}>
                <div className={classes.question}>
                    When did you get your last covid vaccine?
                </div>
                <input type="date" /> 
        </div>}
        <Pagination className={classes.pagination}/>
    </div>
}

export default CovidInformation;