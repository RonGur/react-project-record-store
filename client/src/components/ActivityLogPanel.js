import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ActivityLogPanel extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th style={{width: '230px', color: 'rgb(230,167,86)'}}>User</th>
                        <th style={{width: '247px', color: 'rgb(230,167,86)'}}>Date and Time</th>
                        <th style={{width: '128px', color: 'rgb(230,167,86)'}}>Activity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        (this.props.data.map)(logData =>
                    <tr>
                        <td style={{color: 'white'}}>{logData.username}</td>
                        <td style={{color: 'white'}}>{logData.timestamp}</td>
                        <td style={{color: 'white'}}>{logData.activity}</td>
                    </tr>)
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default ActivityLogPanel;