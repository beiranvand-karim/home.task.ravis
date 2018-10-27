import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteUser} from "../actions/UserActions";
import {withRouter} from "react-router-dom";

class UserList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.users.map((user, index) =>
                        <div key={index}>
                            {user.name}
                            <button onClick={() => this.props.history.push(`/updateUser/${index}`)}>edit</button>
                            <button onClick={() => this.props.dispatch(deleteUser(index))}>delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(withRouter(UserList));
