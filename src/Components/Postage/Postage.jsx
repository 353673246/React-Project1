import React from 'react'
import { Link } from 'react-router-dom'

class Postage extends React.Component{
    render(){
        return(
            <div className="posWrap">
                <h1>是否免邮费</h1>
                <Link to="/Active"><button>免邮费</button></Link>
                <Link to="/Pay"><button>不免邮费</button></Link>
            </div>
        )
    }
}
export default Postage 