import React, {Component, Fragment} from 'react';
import Input from "../components/Input";
import Form from "../components/Form";
import {connect} from "react-redux";
import {createUser} from "../actions/UserActions";

class CreateUser extends Component {
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

        // let numbers = [1, 2, 3],
        //     names = ["John", "Mike", "Colin"];
        // let a = Object.assign({}, ...numbers.map((n, index) => ({[n]: names[index]}))

        const keys = Object.keys(this.state);
        const values = Object.values(this.state);
        const user = keys.reduce((obj, k, i) => ({...obj, [k]: values[i] }), {});
        this.props.dispatch(createUser(user))
    };

    render() {
        return (
            <Fragment>
                <Form onSubmit={this.checkOnLogin.bind(this)}>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.name}
                        placeholder="name" name="name" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.family}
                        placeholder="family" name="family" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.nickName}
                        placeholder="nickName" name="nickName" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.phoneNumber}
                        placeholder="phoneNumber" name="phoneNumber" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.email}
                        placeholder="email" name="email" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.community}
                        placeholder="community" name="community" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.birthDay}
                        placeholder="birthDay" name="birthDay" type="text"/>
                    <Input
                        onChange={e => this.change(e)}
                        value={this.state.gender}
                        placeholder="gender" name="gender" type="text"/>
                    <button type="submit">submit</button>
                </Form>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({users: state.usersReducer});
export default connect(mapStateToProps)(CreateUser);
