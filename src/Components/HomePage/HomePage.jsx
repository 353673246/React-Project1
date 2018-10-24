import React from 'react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className="HPWrap">
                <h1>首页</h1>
                <Link to="/Login"><button>立即领取</button></Link>
            </div>
        )
    }
}
export default HomePage