import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import SignIn from "./containers/SignIn";
import DashBoard from "./containers/DashBoard"
import UpdateUser from "./containers/UpdateUser"

const App = () => (
   <Router>
      <Switch>
         <Route exact path="/" component={SignIn}/>
         <Route path="/signIn" component={SignIn}/>
         <Route path="/dashBoard" component={DashBoard}/>
         <Route path="/updateUser/:id" component={UpdateUser}/>
      </Switch>
   </Router>
);
export default App
