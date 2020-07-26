import React from 'react';
import Header from './components/Header';
import TimeInfo from './components/TimeInfo';
import Question from './components/Question';
import Clock from './components/Clock';
import QuestionNumber from './components/QuestionNumber';
import QuestionDesc from './components/QuestionDesc';
import Footer from './components/Footer';
import Submit from './components/Submit';
import data from './assets/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppCentral.css';

class AppCentral extends React.Component{
  constructor(props){
    super(props);
    this.state={
      num:0,
      question:data[0].question,
      answers:data[0].answers,
      total:data.length
  }
  this.previousQuestion=this.previousQuestion.bind(this);
  this.nextQuestion=this.nextQuestion.bind(this);
  this.pushData=this.pushData.bind(this);
  }
  
pushData(num){
  this.setState({
      question:data[num].question,
      answers:data[num].answers,
      num:this.state.num+1
  })
}
componentDidMount() {
  let { num } = this.state;
  this.pushData(num);
}
previousQuestion(){
  var page=this.state.num;
  console.log(page);
  if(page !== 1)
  page-=1;
  this.setState({
    num:page
  })
  this.pushData(page);
}
nextQuestion(){
  var page = this.state.num;
  var max = this.state.total;
  if(page < max)
  page+=1;
  this.setState({
    num:page
  })
  this.pushData(page);
}

  render(){
    let {num, total, question, answers}=this.state;
    console.log(`current state=${num}`);

  return (
    <div className="App">
      <div className="title"><Header /></div>
      <div className="timeInfo"><TimeInfo /></div>
      <div className="main"><Question num={num} 
                                      question={question}
                                      option1={answers[0]}
                                      option2={answers[1]}
                                      option3={answers[2]}
                                      option4={answers[3]}
                                      /></div>
      <div>
        <div className="clock"><Clock /></div>
        <div className="quesNumber"><QuestionNumber total={total}/></div>
        <div className="quesDesc"><QuestionDesc /></div>
      </div>
      <div className="footer"><Footer current={num}
                                      total={total}
                                      prevQues={this.previousQuestion}
                                      nextQues={this.nextQuestion}
                                      /></div>
      <div className="submit"><Submit /></div>
    </div>
  );
}
}

export default AppCentral;
