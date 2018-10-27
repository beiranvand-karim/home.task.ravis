import React, {Component, Fragment} from 'react';
import CreateUser from "./CreateUser";
import {connect} from "react-redux";
import UserList from "./UserList";

class DashBoard extends Component {
    render() {
        return (
            <Fragment>
                <h1>this dashboard</h1>
                <CreateUser/>
                <UserList/>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(DashBoard);
