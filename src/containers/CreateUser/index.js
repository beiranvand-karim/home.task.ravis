import React, {Component, Fragment} from 'react'
import {connect} from "react-redux"
import {createUser} from "../../actions/UserActions"
import './CreateUser.scss'

const empty = '';

export class CreateUser extends Component {
   state = {
      name: empty,
      family: empty,
      nickName: empty,
      phoneNumber: empty,
      email: empty,
      community: empty,
      birthDay: empty,
      gender: empty,
   };
   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   };

   checkOnLogin = (e) => {
      e.preventDefault();
      const keys = Object.keys(this.state);
      const values = Object.values(this.state);
      const user = keys.reduce((obj, k, i) => ({...obj, [k]: values[i]}), {});
      this.props.createUser(user)
   };

   render() {
      return (
         <Fragment>
            <form className="createUserForm" onSubmit={this.checkOnLogin.bind(this)}>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.name}
                  placeholder="name" name="name" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.family}
                  placeholder="family" name="family" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.nickName}
                  placeholder="nickName" name="nickName" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.phoneNumber}
                  placeholder="phoneNumber" name="phoneNumber" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.email}
                  placeholder="email" name="email" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.community}
                  placeholder="community" name="community" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.birthDay}
                  placeholder="birthDay" name="birthDay" type="text"/>
               <input
                  className="createUserForm createUserForm__input"
                  onChange={e => this.change(e)}
                  value={this.state.gender}
                  placeholder="gender" name="gender" type="text"/>
               <button type="submit">submit</button>
            </form>
         </Fragment>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   createUser: (user) => {
      dispatch(createUser(user))
   }
});
const mapStateToProps = state => ({users: state.usersReducer});
export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
