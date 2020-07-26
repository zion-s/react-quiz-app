import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends React.Component{

    render(){
        return (
            <div className="container">
                <Button variant="light" className="back">Back</Button>
                <h4><span className="heading">Assessment Test:</span> V Class - Maths/Batch C1</h4>
            </div>
        )
    }
}

export default Header;