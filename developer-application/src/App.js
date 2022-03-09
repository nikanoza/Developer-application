import Main from './components/main/Main'
import Applicants from './components/applications-list/Applicants';
import { fetchSkillsData } from './store/redux/skills-slice';

import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SurveyForm from './components/survey-form/SurveyForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Submit from './components/submit/Submit';
import Thanks from './components/submit/Thanks';
import { fetchApplications } from './store/redux/developerInfo-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchSkillsData());
    dispatch(fetchApplications())
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to='/main'/>}></Route>
        <Route path="/main" element={ <Main/>} /> 
        <Route path="/applicants" element={ <Applicants/>} />
        <Route path="/survey-form/:page" element={ <SurveyForm/>}/>
        <Route path="/submit" element={<Submit/> } />
        <Route path='/thanks' element={<Thanks />}/>
      </Routes>
    </div>
  );
}

export default App;
