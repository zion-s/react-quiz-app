import React from 'react';
import data from './../assets/data';
import './Question.css';

class Question extends React.Component{
constructor(props){
    super(props);
    this.state={
        num:0,
        total:data.length
    }
}

pushData(num){
    this.setState({
        question:data[num].question,
        answers:data[num].answers,
        num:this.state.num+1
    })
}
componentWillMount() {
    let { num } = this.state;
    this.pushData(num);
}

    render(){
        let {num, total, question, answers}=this.state;
        return (
            <div className="container">
                <div className="row displayCard">
                    <div id="question">
                        <h5>{num}.&nbsp;{question}</h5>
                    </div>
                </div>
                <div className="row displayCard">
                    <div id="answers">
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value={answers[0]}
                                />
                                &nbsp;{answers[0]}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value={answers[1]}
                                />
                                &nbsp;{answers[1]}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value={answers[2]}
                                />
                                &nbsp;{answers[2]}
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input
                                type="radio"
                                value={answers[3]}
                                />
                                &nbsp;{answers[3]}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;