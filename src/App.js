import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import TimeInfo from './components/TimeInfo';
import Question from './components/Question';
import Clock from './components/Clock';
import QuestionNumber from './components/QuestionNumber';
import QuestionDesc from './components/QuestionDesc';
import Footer from './components/Footer';
import Submit from './components/Submit';

function App() {
  return (
    <div className="App">
      <div className="title"><Header /></div>
      <div className="timeInfo"><TimeInfo /></div>
      <div className="main"><Question /></div>
      <div>
        <div className="clock"><Clock /></div>
        <div className="quesNumber"><QuestionNumber /></div>
        <div className="quesDesc"><QuestionDesc /></div>
      </div>
      <div className="footer"><Footer /></div>
      <div className="submit"><Submit /></div>
    </div>
  );
}

export default App;
