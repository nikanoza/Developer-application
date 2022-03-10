import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import classes from './Pagination.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

let checkValidity = false;
const Pagination = (props) => {
    const params = useParams();
    const page = +params.page;
    const navigationStatus = useSelector(state => state.navigationStatus);
    const navigate = useNavigate();

    useEffect(() => {
        if(!checkValidity){
            if( page === 2 && !navigationStatus.technicalSkillPage){
                navigate('/survey-form/1');
            }else if( page === 3 && !navigationStatus.covidInformationPage){
                navigate('/survey-form/1');
            }else if(page === 4 && !navigationStatus.aboutPage){
                navigate('/survey-form/1');
            }
            checkValidity = true;
        }
    }, [page, navigationStatus.technicalSkillPage, navigationStatus.covidInformationPage, navigationStatus.aboutPage, navigate])

    const goToNextPage = () => {
        if(page === 1 && navigationStatus.personalInfoPage){
            navigate('/survey-form/2');
        }else if(page === 2 && navigationStatus.technicalSkillPage){
            navigate('/survey-form/3');
        }else if(page === 3 && navigationStatus.covidInformationPage){
            navigate('/survey-form/4');
        }else if(page === 4 && navigationStatus.aboutPage){
            navigate('/submit');
        }else{
            page === 1 ? alert('should entered firstname, lastname and email fields corectly') :
            page === 2 ? alert('should add 1 or more skill') :
            page === 3 ? alert('should answer all the questions first') :
            alert('should answer the question and fill the textareas field(s)');
        }
    }

    const goToPrviousPage = () => {
        if(page === 2){
            navigate('/survey-form/1');
        } 
        if(page === 3 ){
            navigate('/survey-form/2');
        }
        if(page === 4){
            navigate('/survey-form/3');
        }
    }

    const navigationHandler = (number) => {
        if(number === 1 ){
            navigate('/survey-form/1');
        }
        if(number === 2 && navigationStatus.personalInfoPage){
            navigate('/survey-form/2');
        }
        if(number === 3 && navigationStatus.technicalSkillPage){
            navigate('/survey-form/3');
        }
        if(number === 4 && navigationStatus.covidInformationPage){
            navigate('/survey-form/4');
        }
    }

    return <div className={`${classes.pagination} ${props.className}`}>
        <FontAwesomeIcon icon={faCircleChevronLeft} className={classes.icon} onClick={goToPrviousPage}/>
        <button type='button' className={classes['btn-circle']} 
        style={{background: '#FE3B1F'}}
        onClick={() => { navigationHandler(1) }}
        ></button>
        <button type='button' className={classes['btn-circle']} 
        style={{background: navigationStatus.personalInfoPage ? '#FE3B1F' : '#ffffff'}}
        onClick={() => { navigationHandler(2) }}
        ></button>
        <button type='button' className={classes['btn-circle']} 
        style={{background: navigationStatus.technicalSkillPage ? '#FE3B1F' : '#ffffff'}}
        onClick={() => { navigationHandler(3) }}
        ></button>
        <button type='button' className={classes['btn-circle']} 
        style={{background: navigationStatus.covidInformationPage ? '#FE3B1F' : '#ffffff'}}
        onClick={() => { navigationHandler(4) }}
        ></button>
        <button type='button' className={classes['btn-circle']}></button>
        <FontAwesomeIcon icon={faCircleChevronRight} className={classes.icon} onClick={goToNextPage}/>
    </div>
}

export default Pagination;
