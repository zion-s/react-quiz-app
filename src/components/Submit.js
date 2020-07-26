import React from 'react';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';
import './Submit.css';

class Submit extends React.Component{

    render(){
        return (
            <Button variant="primary" size="lg" className="submitButton">
      <span className="submitText">Submit Test</span><i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </Button>
        )
    }
}

export default Submit;