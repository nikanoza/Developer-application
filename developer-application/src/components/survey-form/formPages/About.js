
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';
import Pagination from '../Pagination';
import classes from './About.module.css';
const About = () => {
    const [devtalksStatus, setDevtalksStatus] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(developerInfoActions.updateMoreInfo({property: 'attendStatus', value: devtalksStatus === 'true'}));
    }, [devtalksStatus, dispatch]);

    const devtalksStatusChangeHandler = (event) => {
        setDevtalksStatus(event.target.value);
    }

    const aboutDevtalksChangeHandler = (event) => {
        dispatch(developerInfoActions.updateMoreInfo({property: 'aboutDevtalk', value: event.target.value}));
    }

    const specialTextChangeHandler = (event) => {
        dispatch(developerInfoActions.updateMoreInfo({property: 'special', value: event.target.value}));
    }

    return <div className={classes.page}>
        <div className={classes.title}>
            What about you?
        </div>
        <div className={classes['radio-group']}>
            <div className={classes.question}>
            Would you attend Devtalks and maybe also organize your own?
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" value="true" name='devtalks' 
                checked={devtalksStatus === 'true'} onChange={devtalksStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" value="false" name='devtalks'
                checked={devtalksStatus === 'false'} onChange={devtalksStatusChangeHandler}   
                />
                <label>No</label>
            </div>
        </div>
        <div className={classes['area-group']}>
            <div className={classes['area-title']}>
                What would you speak about at Devtalk?
            </div>
            <textarea className={classes['about-Devtalk']} placeholder="I would..." onChange={aboutDevtalksChangeHandler}></textarea>
        </div>
        <div className={classes['area-group']}>
            <div className={classes['area-title']}>
                Tell us something special
            </div>
            <textarea className={classes['about-me']} placeholder="I..." onChange={specialTextChangeHandler}></textarea>
        </div>
        <Pagination className={classes.pagination}/>
    </div>
}

export default About;