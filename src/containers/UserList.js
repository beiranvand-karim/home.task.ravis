import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteUser} from "../actions/UserActions";
import {withRouter} from "react-router-dom";
import AlignCenter from "../components/AlignCenter";
import TableRow from "../components/TableRow";
import Auto from "../components/Auto";

class UserList extends Component {
    render() {
        return (
            <AlignCenter>
                <Auto>
                    <TableRow>name</TableRow>
                    <TableRow>family</TableRow>
                    <TableRow>nickName</TableRow>
                    <TableRow>p. Number</TableRow>
                    <TableRow>email</TableRow>
                    <TableRow>community</TableRow>
                    <TableRow>birthDay</TableRow>
                    <TableRow>gender</TableRow>
                    <TableRow>edit</TableRow>
                    <TableRow>delete</TableRow>
                </Auto>
                {
                    this.props.users.map((user, index) =>
                        <Auto key={index}>
                            <TableRow>{user.name}</TableRow>
                            <TableRow>{user.family}</TableRow>
                            <TableRow>{user.nickName}</TableRow>
                            <TableRow>{user.phoneNumber}</TableRow>
                            <TableRow>{user.email}</TableRow>
                            <TableRow>{user.community}</TableRow>
                            <TableRow>{user.birthDay}</TableRow>
                            <TableRow>{user.gender}</TableRow>
                            <TableRow>
                                <button onClick={() => this.props.history.push(`/updateUser/${index}`)}>edit</button>
                            </TableRow>
                            <TableRow>
                                <button onClick={() => this.props.dispatch(deleteUser(index))}>delete</button>
                            </TableRow>
                        </Auto>
                    )
                }
            </AlignCenter>
        )
    }
}

const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(withRouter(UserList));
