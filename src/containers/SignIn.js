import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class SignIn extends Component {
    render() {
        return(
            <Fragment>
                <h1>this is sign in page</h1>
                <Link to="/dashBoard">dashBoard</Link>
            </Fragment>
        )
    }
}

export default SignIn;
