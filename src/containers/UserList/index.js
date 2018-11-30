import React, {Component} from 'react'
import {connect} from "react-redux"
import {deleteUser} from "../../actions/UserActions"
import {withRouter} from "react-router-dom"
import './UserList.scss'

export class UserList extends Component {
   render() {
      return (
         <div className="userListContainer">
            <div className="userListHeader">
               <div className="userListHeader userListHeader__row">name</div>
               <div className="userListHeader userListHeader__row">family</div>
               <div className="userListHeader userListHeader__row">nickName</div>
               <div className="userListHeader userListHeader__row">p. Number</div>
               <div className="userListHeader userListHeader__row">email</div>
               <div className="userListHeader userListHeader__row">community</div>
               <div className="userListHeader userListHeader__row">birthDay</div>
               <div className="userListHeader userListHeader__row">gender</div>
               <div className="userListHeader userListHeader__row">edit</div>
               <div className="userListHeader userListHeader__row">delete</div>
            </div>
            {
               this.props.users.map((user, index) =>
                  <div className="userListHeader" key={index}>
                     <div className="userListHeader userListHeader__row">{user.name}</div>
                     <div className="userListHeader userListHeader__row">{user.family}</div>
                     <div className="userListHeader userListHeader__row">{user.nickName}</div>
                     <div className="userListHeader userListHeader__row">{user.phoneNumber}</div>
                     <div className="userListHeader userListHeader__row">{user.email}</div>
                     <div className="userListHeader userListHeader__row">{user.community}</div>
                     <div className="userListHeader userListHeader__row">{user.birthDay}</div>
                     <div className="userListHeader userListHeader__row">{user.gender}</div>
                     <div className="userListHeader userListHeader__row">
                        <button className="pushHistory" onClick={() => this.props.history.push(`/updateUser/${index}`)}>edit</button>
                     </div>
                     <div className="userListHeader userListHeader__row">
                        <button className="deleteUser" onClick={() => this.props.deleteUser(index)}>delete</button>
                     </div>
                  </div>
               )
            }
         </div>
      )
   }
}
const mapDispatchToProps = dispatch => ({
   deleteUser: (index) => dispatch(deleteUser(index))
});
const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserList))
