import React from 'react';
import './Question.css';

class Question extends React.Component{
    render(){
        return (
                <div className="container questionContainer">
                    <div className="row displayCard">
                        <div id="question">
                            <h5 id="ques">{this.props.num}.&nbsp;{this.props.question}</h5>
                        </div>
                    </div>
                    <div className="row displayCard">
                        <div id="answers">
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={this.props.option1}
                                    />
                                    &nbsp;{this.props.option1}
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={this.props.option2}
                                    />
                                    &nbsp;{this.props.option2}
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={this.props.option3}
                                    />
                                    &nbsp;{this.props.option3}
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value={this.props.option4}
                                    />
                                    &nbsp;{this.props.option4}
                                </label>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Question;