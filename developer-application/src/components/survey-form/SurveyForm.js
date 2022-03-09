import { useParams } from 'react-router-dom';
import { getRedberryText } from '../../store/RedberryTexts/RedberryTexts';
import About from './formPages/About';
import CovidInformation from './formPages/CovidInformation';
import PersonalInformation from './formPages/PersonalInformation';
import { TechnicalSkills } from './formPages/TechnicalSkills';


import classes from './SurveyForm.module.css';

const SurveyForm = () => {
    const params = useParams();
    const page = +params.page;

    const rightText = getRedberryText(page-1);

    return <div className={classes.container}>
        <div className={classes['left-side']}>
            {page === 1 && <PersonalInformation />}
            {page === 2 && <TechnicalSkills />}
            {page === 3 &&<CovidInformation/>}
            {page === 4 && <About/>}
        </div>
        <div className={classes['right-side']}>
            <div className={classes['right-title']}>{rightText.title}</div>
            <div className={classes['right-text']}>{rightText.description}</div>
        </div>
    </div>
}

export default SurveyForm;