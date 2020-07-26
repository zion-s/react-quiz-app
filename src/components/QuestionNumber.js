import React from 'react';
import './QuestionNumber.css';

class QuestionNumber extends React.Component{

    render(){
        var rows=[];
        var total = this.props.total;
        for(let i=1;i<=total;i++){
            rows.push(<div className="circle">{i}</div>)
        }

        return (
            <div className="numberWrapper">
                <h5>Questions</h5>
                <div className="numberContainer">
                    {rows}
                    {/* <div className="circle">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                    <div className="circle">4</div>
                    <div className="circle">5</div>
                    <div className="circle">6</div>
                    <div className="circle">7</div>
                    <div className="circle">8</div>
                    <div className="circle">9</div>
                    <div className="circle">10</div>
                    <div className="circle">11</div>
                    <div className="circle">12</div>
                    <div className="circle">13</div>
                    <div className="circle">14</div>
                    <div className="circle">15</div>
                    <div className="circle">16</div>
                    <div className="circle">17</div>
                    <div className="circle">18</div> */}
                </div>
            </div>
        )
    }
}

export default QuestionNumber;