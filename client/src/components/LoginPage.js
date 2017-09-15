import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../logo.svg';
import '../App.css';
import * as userActions from '../actions/userActions';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: { username: "", password: ""}
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onUsernameChange(event) {
        const user = this.state.user;
        user.username = event.target.value;
        this.setState({user: user})
    }

    onPasswordChange(event) {
        const user = this.state.user;
        user.password = event.target.value;
        this.setState({user: user})
    }

    onClickSave() {
        this.props.actions.login(this.state.user);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <h2>Username</h2>
                <input
                    type="text"
                    onChange={this.onUsernameChange}
                    value={this.state.user.username} />

                <h2>Password</h2>
                <input
                    type="password"
                    onChange={this.onPasswordChange}
                    value={this.state.user.password} />
                <input
                    type="submit"
                    value="Login"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
