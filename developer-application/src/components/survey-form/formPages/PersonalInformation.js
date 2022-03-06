import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { developerInfoActions } from '../../../store/redux/developerInfo-slice';

import classes  from './PersonalInformation.module.css';

const PersonalInformation = () => {
    const [firstNameError, setFirstNameError] = useState({valid: true, text: ''}); // first name validate state
    const [lastNameError, setLastNameError] = useState({valid: true, text: ''}); // last name validate state
    const [emailError, setEmailError] = useState({valid: true, text: ''}); //email validate state
    const [mobileError, setMobileError] = useState({valid: true, text: ''}); //mobile validate state

    const dispatch = useDispatch();

    //validate functions
    const nameVaildation = (string) => {
        if(string.length < 1){
            setFirstNameError({valid:false, text: '*first name is required'})
        }
        else if(string.length < 3){
            setFirstNameError({valid:false, text: '*first name should include 3 or more characters'});
        }else{
            setFirstNameError({valid:true, text: ''});
            dispatch(developerInfoActions.updatePersonalInfo({property: 'firstName', value: string}));
        };
    };

    const surnameValidation = (string) => {
        if(string.length < 1){
            setLastNameError({valid:false, text: '*last name is required'})
        }
        else if(string.length < 3){
            setLastNameError({valid:false, text: '*last name should include 3 or more characters'});
        }else{
            setLastNameError({valid:true, text: ''});
            dispatch(developerInfoActions.updatePersonalInfo({property: 'lastName', value: string}));
        };
    };

    const emailValidation = (string) => {
        if(string.length < 1){
            setEmailError({valid:false, text: '*email is required'});
        }else if(!string.includes('@') || !string.includes('.')){
            setEmailError({valid:false, text: '*email should include "@" and "." characters'});
        }else{
            setEmailError({valid: true, text: ''});
            dispatch(developerInfoActions.updatePersonalInfo({property: 'email', value: string}));
        };
    };

    const mobileValidation = (number) => {
        if(!(/^9955\d{8}$/).test(number)){
            setMobileError({valid:false, text: '*mobile should be georgian format, start with 9955'});
        }else{
            setMobileError({valid: true, text: ''});
            dispatch(developerInfoActions.updatePersonalInfo({property: 'mobile', value: number}));
        }
    }

    // change handler functions for inputs
    const firstNameChangeHandler = (event) => {
        nameVaildation(event.target.value);
    };
    const lastNameChangeHandler = (event) =>{
        surnameValidation(event.target.value);
    };
    const emailChangeHandler = (event) => {
        emailValidation(event.target.value);
    };
    const mobileChangeHandler = (event) =>{
        mobileValidation(event.target.value);
        if(event.target.value === ''){
            setMobileError({valid: true, text: ''});
        }
    };

    return <div className={classes.page}>
        <div className={classes.title}>
            Hey, Rocketeer, what are your coordinates?
        </div>
        <div className={classes['form-group']}>
            <form>
                <input type='text' placeholder='First Name' className={classes.input}
                style={{border: firstNameError.valid? '1px solid #525557' : '1px solid #FE3B1F'}} 
                onChange={firstNameChangeHandler}
                />
                <div className={classes['error-message']}>
                    {firstNameError.text}
                </div>
                <input type='text' placeholder='Last Name'  className={classes.input}
                style={{border: lastNameError.valid? '1px solid #525557' : '1px solid #FE3B1F'}} 
                onChange={lastNameChangeHandler}
                />
                <div  className={classes['error-message']}>
                    {lastNameError.text}
                </div>
                <input type='email' placeholder='E Mail'  className={classes.input}
                style={{border: emailError.valid? '1px solid #525557' : '1px solid #FE3B1F'}} 
                onChange={emailChangeHandler}
                />
                <div  className={classes['error-message']}>
                    {emailError.text}
                </div>
                <input type='number' placeholder='+9955'  className={classes.input}
                style={{border: mobileError.valid? '1px solid #525557' : '1px solid #FE3B1F'}} 
                onChange={mobileChangeHandler}
                />
                <div className={classes['error-message']}>
                    {mobileError.text}
                </div>
            </form>
        </div>
    </div>
}

export default PersonalInformation;