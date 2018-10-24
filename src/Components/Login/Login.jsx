import React from 'react'
import {Link} from 'react-router-dom'

class Login extends React.Component{
    render(){
        return (
            <div className="LoginWrap">
                <h1>登录</h1>
                <Link to="/UserInfo"><button>登录</button></Link>
            </div>
        )
    }
}
export default Login