import React from 'react'
import {Link} from 'react-router-dom'

class Active extends React.Component{
    render(){
        return(
            <div className="ActiveWrap">
                <h1>助力页面</h1>
                <Link to="/ActSuc"><button>助力完成,点击领取!</button></Link>
            </div>
        )
    }
}
export default Active