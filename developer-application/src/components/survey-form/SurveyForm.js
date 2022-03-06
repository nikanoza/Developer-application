import { getRedberryText } from '../../store/RedberryTexts/RedberryTexts';
import About from './formPages/About';
import CovidInformation from './formPages/CovidInformation';
import PersonalInformation from './formPages/PersonalInformation';
import { TechnicalSkills } from './formPages/TechnicalSkills';


import classes from './SurveyForm.module.css';

const SurveyForm = () => {

    //const developerInfo = useSelector(state=> state.formInfo);

    const rightText = getRedberryText(0);

    return <div className={classes.container}>
        <div className={classes['left-side']}>
            {/* <PersonalInformation /> */}
            {/* <TechnicalSkills /> */}
            {/* <CovidInformation/> */}
            <About/>
        </div>
        <div className={classes['right-side']}>
            <div className={classes['right-title']}>{rightText.title}</div>
            <div className={classes['right-text']}>{rightText.description}</div>
        </div>
    </div>
}

export default SurveyForm;