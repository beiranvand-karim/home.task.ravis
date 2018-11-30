import React, {Component, Fragment} from 'react'
import {withRouter} from "react-router-dom"
import './SignIn.scss'

export class SignIn extends Component {
   constructor() {
      super();
      this.routeChange = this.routeChange.bind(this);
   }

   routeChange() {
      let path = `dashBoard`;
      this.props.history.push(path);
   }

   checkOnLogin = (e) => {
      e.preventDefault();
      let path = `dashBoard`;
      if (this.state.userName === 'admin' && this.state.passWord === 'admin') {
         this.props.history.push(path);
      }
   };

   state = {
      userName: '',
      passWord: ''
   };

   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      })
   };

   render() {
      return (
         <Fragment>
            <div className="signInContainer">
               <form onSubmit={this.checkOnLogin.bind(this)}>
                  <input
                     className="inputElement"
                     name="userName"
                     onChange={e => this.change(e)}
                     value={this.state.userName}
                     placeholder="userName"
                     type="text"/>
                  <input
                     className="inputElement"
                     name="passWord"
                     value={this.state.passWord}
                     onChange={e => this.change(e)}
                     placeholder="passWord"
                     type="password"/>
                  <button type="submit">sign in</button>
               </form>
            </div>
         </Fragment>
      )
   }
}

export default withRouter(SignIn);
