import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'dva'
export default connect((state) => {
    return state
})(class Footer extends Component {
    render() {
        // console.log(this)
        return (
            <div style={{}} id="show" className="fixed">
                {
                    this.props.example.tabbar.map((item, index) => {
                        return (
                            <Link to={item.path} className={item.className} key={index}>
                                <dl>
                                    <dt className="active-foot active-tj">
                                        <img src={item.img} />
                                    </dt>
                                    <dd><p className={
                                        index===this.props.tab?"red":""
                                    }>{item.title} </p></dd>
                                </dl>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
})