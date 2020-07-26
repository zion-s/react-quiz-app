import React from 'react';
import './Clock.css';

class Clock extends React.Component{

    render(){
        return (
            <div className="clock">
                <div className="hour">
                    <h2>00</h2>
                    <p>hour</p>
                </div>
                <div className="min">
                    <h2>15</h2>
                    <p>minute</p>
                </div>
                <div className="sec">
                    <h2>34</h2>
                    <p>second</p>
                </div>
            </div>
        )
    }
}

export default Clock;