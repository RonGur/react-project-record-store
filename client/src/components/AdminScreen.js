import React, {Component} from 'react';
import {Button, Form, FormControl} from "react-bootstrap";
import {getActivityLog} from "./UserFunctions";
import Table from "@material-ui/core/Table";
import ActivityLogPanel from "./ActivityLogPanel";

class AdminScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allUserLogs: [],
            filteredUserLogs: [],
            searchedUser: ''

        }
    }

    componentWillMount() {
        getActivityLog()
            .then((activityLog) => {
            if (activityLog) {
                this.setState({allUserLogs: activityLog});
                this.setState({filteredUserLogs: activityLog});
            }})
            .catch(err => alert(err.message));
    }


    searchByUser = () => {
    let filteredList = this.state.allUserLogs;
        filteredList = filteredList.filter((item) => {
        return item.username.toLowerCase().search(this.state.searchedUser.toLowerCase()) !== -1;
    });

    this.setState({filteredUserLogs: filteredList});
    }

    clearSearch(){
        this.setState({
            filteredUserLogs: this.state.allUserLogs,
            searchedUser: ''
        });
    }



    render() {
      let  [username, time, activity] = this.state.filteredUserLogs;
        return (

                <div>
                    <h1 className="text-center text-white d-inline d-lg-block site-heading"><span
                        className="text-primary site-heading-upper mb-3"
                        style={{paddingBottom: '0px', paddingTop: '13px'}}>Admin Screen</span></h1>
                    <div className="table-responsive">
                        <ActivityLogPanel data={this.state.filteredUserLogs}/>
                    </div>

                    <Form className={"center"}>
                        <p className="text-white-50">Filter by username</p>
                        <FormControl placeholder='to filter - enter username'
                                     onChange={ event => this.setState({searchedUser: event.target.value})}
                        />

                        <div className={"center"}>

                            <Button onClick={() => this.searchByUser()}>
                                Filter
                            </Button>

                            <Button onClick={() => this.clearSearch()}>
                                Clear Filter
                            </Button>
                        </div>
                    </Form>

                </div>

        );
    }
}

export default AdminScreen;