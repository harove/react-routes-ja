import React, { Component } from 'react';
import {login} from '../../utils/session';

class Login extends Component {

    handlerLogin = () =>{
        login();
    }

    componentWillUnmount = () => {
        console.log('hola');
        alert(1);
    }

    render() {
        return (
            <div className="login">
                Login
                <button onClick = {this.handlerLogin}>
                    iniciar sesión
                </button>
            </div>
        )
    }
}
export default Login;