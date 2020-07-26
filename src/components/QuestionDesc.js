import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './QuestionDesc.css';

class QuestionDesc extends React.Component{

    render(){
        return (
            <div className="desc">
                <p><i className="fa fa-circle" aria-hidden="true"></i>&nbsp;&nbsp;Current</p>
                <p className="noanswer"><i className="fa fa-circle" aria-hidden="true"></i>&nbsp;&nbsp;Un-answered</p>
                <p className="answer"><i className="fa fa-circle" aria-hidden="true"></i>&nbsp;&nbsp;Answered</p>
                <p className="noattempt"><i className="fa fa-circle" aria-hidden="true"></i>&nbsp;&nbsp;Not attempted</p>
            </div>
            
        )
    }
}

export default QuestionDesc;