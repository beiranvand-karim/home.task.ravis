import React, {Component, Fragment} from 'react'
import {readUser, updateUser} from "../../actions/UserActions"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import './UpdateUser.scss'

export class UpdateUser extends Component {
   componentDidMount() {
      this.props.readUser(this.props.match.params.id);
   }

   state = {
      name: '',
      family: '',
      nickName: '',
      phoneNumber: '',
      email: '',
      community: '',
      birthDay: '',
      gender: '',
   };

   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   };

   checkOnLogin = (e) => {
      e.preventDefault();
      const userValues = Object.values(this.props.selectedUser);
      const keys = Object.keys(this.state);
      const values = Object.values(this.state);
      const user = Object.assign({}, ...keys.map((n, index) => ({[n]: values[index] === '' ? userValues[index] : values[index]})));
      this.props.updateUser(this.props.match.params.id, user);
      this.props.history.push(`/dashBoard`)
   };

   render() {
      if (this.props.selectedUser) {
         const {name, family, nickName, phoneNumber, email, community, birthDay, gender} = this.props.selectedUser;
         return <Fragment>
            <div className="updateUserContainer">
               <form className="updateUserForm" onSubmit={this.checkOnLogin.bind(this)}>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.name === '' ? name : this.state.name}
                     placeholder="name" name="name" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.family === '' ? family : this.state.family}
                     placeholder="family" name="family" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.nickName === '' ? nickName : this.state.nickName}
                     placeholder="nickName" name="nickName" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.phoneNumber === '' ? phoneNumber : this.state.phoneNumber}
                     placeholder="phoneNumber" name="phoneNumber" type="text"/>
                  <input
                     onChange={e => this.change(e)}
                     value={this.state.email === '' ? email : this.state.email}
                     placeholder="email" name="email" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.community === '' ? community : this.state.community}
                     placeholder="community" name="community" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.birthDay === '' ? birthDay : this.state.birthDay}
                     placeholder="birthDay" name="birthDay" type="text"/>
                  <input
                     className="updateUserForm updateUserForm__input"
                     onChange={e => this.change(e)}
                     value={this.state.gender === '' ? gender : this.state.gender}
                     placeholder="gender" name="gender" type="text"/>
                  <button type="submit">submit</button>
               </form>
            </div>
         </Fragment>
      } else {
         return null
      }
   }
}

const mapDispatchToProps = dispatch => ({
   readUser: (id) => dispatch(readUser(id)),
   updateUser: (id, user) => dispatch(updateUser(id, user))
});
const mapStateToProps = state => ({selectedUser: state.usersReducer.selectedUser});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateUser));
