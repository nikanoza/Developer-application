
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';
import { navigationStatusActions } from '../../../store/redux/navigationStatus-slice';
import Pagination from '../Pagination';
import classes from './About.module.css';
const About = () => {
    const [showSpecialError, setSpecialError] = useState(false);

    const dispatch = useDispatch();
    const moreDetailsInfo = useSelector( state => state.formInfo.more);
    const navigationStatus = useSelector( state => state.navigationStatus.aboutPage);

    const devtalksStatusChangeHandler = (event) => {
       dispatch(developerInfoActions.updateMoreInfo({property: 'attendStatus', value: event.target.value === 'true'}));
    }

    const aboutDevtalksChangeHandler = (event) => {
        dispatch(developerInfoActions.updateMoreInfo({property: 'aboutDevtalk', value: event.target.value}));
    }

    const specialTextChangeHandler = (event) => {
        dispatch(developerInfoActions.updateMoreInfo({property: 'special', value: event.target.value}));
        setSpecialError(true);
    }

    const canGoNextPage = () => {
        const devtalkStatus = moreDetailsInfo.attendStatus !== '';
        const aboutDevtalk = (moreDetailsInfo.attendStatus !== ''  && moreDetailsInfo.aboutDevtalk !== '') || 
        (moreDetailsInfo.attendStatus === false &&  moreDetailsInfo.aboutDevtalk === '');
        const special = moreDetailsInfo.special !== '';

        if(devtalkStatus && aboutDevtalk && special){
            dispatch(navigationStatusActions.updateStatus({property: 'aboutPage', status: true}))
        }else{
            if(navigationStatus){
                dispatch(navigationStatusActions.updateStatus({property: 'aboutPage', status: false}))
            }
        }
    }
    canGoNextPage();

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
                checked={moreDetailsInfo.attendStatus} onChange={devtalksStatusChangeHandler}
                />
                <label>Yes</label>
            </div>
            <div className={classes['radio-btn']}>
                <input type="radio" value="false" name='devtalks'
                checked={!moreDetailsInfo.attendStatus && moreDetailsInfo.attendStatus !== ''} onChange={devtalksStatusChangeHandler}   
                />
                <label>No</label>
            </div>
        </div>
        {moreDetailsInfo.attendStatus && <div className={classes['area-group']}>
            <div className={classes['area-title']}>
                What would you speak about at Devtalk?
            </div>
            <textarea className={classes['about-Devtalk']} placeholder="I would..." 
            value={moreDetailsInfo.aboutDevtalk}
            onChange={aboutDevtalksChangeHandler}></textarea>
        </div>}
        {moreDetailsInfo.attendStatus && moreDetailsInfo.aboutDevtalk === '' && <div className={classes['error-message']}>
            *Should Choose one of the options
        </div>}
        <div className={classes['area-group']}>
            <div className={classes['area-title']}>
                Tell us something special
            </div>
            <textarea className={classes['about-me']} placeholder="I..." 
            value={moreDetailsInfo.special}
            onChange={specialTextChangeHandler}></textarea>
        </div>
        {moreDetailsInfo.special === '' && showSpecialError && <div className={classes['error-message']}>
            *Should Choose one of the options
        </div>}
        <Pagination className={classes.pagination} 
        
        />
    </div>
}

export default About;