import React from 'react'
import {Link} from 'react-router-dom'

class Pay extends React.Component{
    render(){
        return(
            <div className="PayWrap">
                <h1>支付页面</h1>
                <Link to="/PaySuc"><button>支付宝</button></Link>
                <Link to="/PaySuc"><button>微信</button></Link>
            </div>
        )
    }
}
export default Pay