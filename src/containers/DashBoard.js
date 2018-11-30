import React, {Component, Fragment} from 'react'
import CreateUser from "./CreateUser"
import {connect} from "react-redux"
import UserList from "./UserList"
import AlignCenter from "../components/AlignCenter"

class DashBoard extends Component {
   render() {
      return (
         <Fragment>
            <AlignCenter>
               <CreateUser/>
               <UserList/>
            </AlignCenter>
         </Fragment>
      )
   }
}

const mapStateToProps = state => ({users: state.usersReducer.users});
export default connect(mapStateToProps)(DashBoard);
