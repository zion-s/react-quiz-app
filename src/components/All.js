import React from 'react';
import Table from 'react-bootstrap/Table';
import './../assets/data';
import './All.css';
import data from './../assets/data';

class All extends React.Component{

    render(){
        var tableRows = [];
        var totalQues = this.props.total;
        for(let i=1;i<=totalQues;i++){
            tableRows.push(<tr>
                                <td>{i}</td>
                                <td>{data[i-1].correct}</td>
                            </tr>)
        }
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </Table>
        )
    }
}

export default All;