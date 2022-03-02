
import classes  from './PersonalInformation.module.css';

const PersonalInformation = () => {
    return <div className={classes.page}>
        <div className={classes.title}>
            Hey, Rocketeer, what are your coordinates?
        </div>
        <div className={classes['form-group']}>
            <form>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='email' placeholder='E Mail'/>
                <input type='number' placeholder='+995 5'/>
            </form>
        </div>
    </div>
}

export default PersonalInformation;