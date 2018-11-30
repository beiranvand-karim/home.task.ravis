import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Input from "../components/Input";

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
            <Wrapper>
               <form onSubmit={this.checkOnLogin.bind(this)}>
                  <Input
                     name="userName"
                     onChange={e => this.change(e)}
                     value={this.state.userName}
                     placeholder="userName"
                     type="text"/>
                  <Input
                     name="passWord"
                     value={this.state.passWord}
                     onChange={e => this.change(e)}
                     placeholder="passWord"
                     type="password"/>
                  <button type="submit">sign in</button>
               </form>
            </Wrapper>
         </Fragment>
      )
   }
}

export default withRouter(SignIn);
