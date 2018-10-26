import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteUser} from "../actions/UserActions";

class UserList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.users.map((user, index) =>
                        <div key={index}>
                            {user.name}
                            <button>edit</button>
                            <button onClick={() => this.props.dispatch(deleteUser(index))}>delete</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(UserList);
