import React from 'react';
import Button from 'react-bootstrap/Button';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';

class Footer extends React.Component{

    render(){
        return (
            <div className="footer">
                <div className="prevButton">
                <Button variant="primary" size="sm">
                <i className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;Previous
                </Button>
                </div>

                <div className="pageNumber">
                    <p>2 of 25</p>
                </div>
                
                <div className="nextButton">
                <Button variant="primary" size="sm">
                Next&nbsp;<i className="fa fa-angle-right" aria-hidden="true"></i>
                </Button>
                </div>
            </div>
        )
    }
}

export default Footer;