import React, { Component } from 'react';
import{ withRouter } from 'react-router-dom'
import {connect} from 'react-redux'


export default withRouter(connect((state)=>{
    return state
}) (class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            telNum: '', //手机号码
            // isok:false, 
            zhezhao:true, //控制遮罩，true为隐藏
        }
    }
    componentDidMount() {
        // console.log(this.refs.telNum)
    }
    //获取input的值，更新state的telNum
    change(e) {
        let telNum = e.target.value
        this.setState({
            telNum //把获取到的值存进telNum
        })
        localStorage.setItem('tel',JSON.stringify(telNum)) //把号码存到localstorage 
                 //  getItem 取localstorage的值
    }
    //手机号码正则验证
    next() {
        console.log(this.state.telNum)
        let reg = /^1[3-9]\d{9}$/
        let res = reg.test(this.state.telNum)
        if (res) {
            // this.setState({
            //     isok: true //验证通过，把isok改为true，用于控制遮罩
            // })
            this.props.dispatch({
                type: 'example/save',
                payload:{
                    isok:true //验证通过，把isok添加到公共仓库，用于控制mine的遮罩
                }
            })
            this.props.history.push('/register');//跳转到mine页面
        } else {
            this.setState({
                zhezhao:false //验证不通过，把zhezhao的值改为false，出现遮罩
            })
        }
    }
    sure(){
        this.setState({
            zhezhao:true //点击确认把zhezhao的值改为true,隐藏遮罩
        })
    }
    render() {
        // console.log(this)
        return (
            <div className="box">
                <section>
                    <form action="loginPassword.html" id="loginPassword" method="POST" onSubmit="return checkform()">
                        <div className="login">
                            <div className="login_od">
                                <p>+86</p>
                            </div>
                            <div className="login_td">
                                <input onChange={this.change.bind(this)} type="number" placeholder="请输入手机号码" id="mobile" name="phoneNumber" maxLength="11" ref="telNum" />
                            </div>
                        </div>
                        <div className="login_div">
                            <p className="xy-check" style={{ color: '#888888', fontSize: '12px' }}><img id="xy-is-check" alt="" src="https://m.wukonglicai.com//images/xy-checked.png" />本人已阅读并同意<a href="https://static.9f.cn/pos/注册协议.pdf" target="_blank">《用户协议》</a></p>
                        </div>
                        <aside className="login_bt">
                            <div>
                                <input type="button" value="下一步" className="login_btn" onClick={this.next.bind(this)}/>
                            </div>
                        </aside>
                        <aside className="login_fo">
                            <p>*悟空不会在任何地方泄漏您的号码</p>
                        </aside>
                        <input type="hidden" id="ref" name="ref" value="" />
                        <input type="hidden" id="channelCode" name="channelCode" value="" />
                    </form>
                    <p className="text1" style={{ position: 'fixed', bottom: '26px', left: '0px', width: '100%', color: 'rgb(119, 119, 119)', textAlign: 'center' }}>期望回报并非平台承诺回报</p>
                    <p className="text2" style={{ position: 'fixed', bottom: ' 10px', left: '0px', width: '100%', color: 'rgb(119, 119, 119)', textAlign: 'center' }}>网贷有风险，出借需谨慎</p>

                    <div id="shade" style={{display: this.state.zhezhao?'none':'block'}}>
                        <section id="zhezhao" className="zhezhao"></section>
                        <aside id="showDiv" className="showDiv">
                            <div id="zhe" className="zhe">
                                <h1>提示</h1>
                                <p id="message-tishi">您输入的手机号有误，请重新输入</p>
                                <span id="bto" onClick={this.sure.bind(this)}>确定</span>
                            </div>
                        </aside>
                    </div>

                </section>
            </div>
        )
    }
}))