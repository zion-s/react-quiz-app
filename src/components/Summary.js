import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import All from './All';
import './Summary.css';

class Summary extends React.Component{

    render(){
        
        return (
            <div className="summaryWrapper">
                <Tabs defaultActiveKey="All">
                    <Tab eventKey="All" title="All">
                        <All total = {this.props.total}/>
                    </Tab>
                    <Tab eventKey="Correct" title="Correct">
                        <p>Correct answers</p>
                    </Tab>
                    <Tab eventKey="Wrong" title="Wrong">
                        <p>Wrong answers</p>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Summary;