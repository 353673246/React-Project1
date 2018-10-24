import React from 'react'
import { Link } from 'react-router-dom'

class UserInfo extends React.Component{
    render(){
        return(
            <div className="UserInfoWrap">
                <h1>用户信息填写</h1>
                <Link to="/Postage"><button>确定</button></Link>
            </div>
        )
    }
}
export default UserInfo