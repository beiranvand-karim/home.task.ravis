import React, {Component, Fragment} from 'react';
import CreateUser from "./CreateUser";
import {connect} from "react-redux";

class DashBoard extends Component {

    listUsers = (users) => {
        if (users.length > 0) {
            return <ul>
                {users.map((user, index) => <li key={index}>{user.name}</li>)}
            </ul>
        } else {
            return null
        }
    };

    render() {
        return (
            <Fragment>
                <h1>this dashboard</h1>
                <CreateUser />
                {this.listUsers(this.props.users)}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(DashBoard);
