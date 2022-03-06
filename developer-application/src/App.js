import Main from './components/main/Main'
import Applicants from './components/applications-list/Applicants';
import { fetchSkillsData } from './store/redux/skills-slice';

import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SurveyForm from './components/survey-form/SurveyForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Submit from './components/submit/Submit';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchSkillsData());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to='/main'/>}></Route>
        <Route path="/main" element={ <Main/>} /> 
        <Route path="/applicants" element={ <Applicants/>} />
        <Route path="/survey-form" element={ <SurveyForm/>}/>
        <Route path="/submit" element={<Submit/> } />
      </Routes>
    </div>
  );
}

export default App;
