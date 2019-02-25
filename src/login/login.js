/*
登陆页面
 */
import React,{Component} from 'react'
import {Button} from'antd';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Button type="pyrimary" >Primary</Button>;
            <Button type="primary">Primary</Button>;
            <Button type="primary">Primary</Button>;
            <Button type="primary">Primary</Button>;

        </div>)
    }
}
export default Login;

