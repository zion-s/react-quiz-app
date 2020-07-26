import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './TimeInfo.css';

class TimeInfo extends React.Component{

    render(){
        return (
            <div className="timecontainer">
                <h4><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;Time Info</h4>
            </div>
            
        )
    }
}

export default TimeInfo;