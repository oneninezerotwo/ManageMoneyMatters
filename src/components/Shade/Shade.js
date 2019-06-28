import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'dva'

export default connect((state)=>{
    return state
}) (class Exchange extends Component {
    componentDidMount(){
        console.log(this.props.example)
    }

    render() {
        console.log(this)
        return (
            <div id="mask" style={{display:localStorage.getItem('tel')?'none':'block'}}>
                <div className="bom-box">
                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/wukongimg.png" alt="" /></span>
                    <Link to="/login" className="n-btn">开始挣钱</Link>
                </div>
            </div>
        )
    }
})