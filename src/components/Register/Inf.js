import React, { Component } from 'react';
import{ withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

export default withRouter (connect((state)=>{
    return state
}) (class Inf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tel: Number,
            loading: true,
            yztime: 89,
            random:'',
            vCode:'',
            getPasw:'',
            checkPasw:''
        }
    }
    componentDidMount() {
        this.getTel()
    }
    //隐藏号码中间四位数
    getTel() {
        let phone = localStorage.getItem('tel')
        let tel = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        this.setState({
            tel
        })
        // console.log(tel)
    }
    //倒计时获取验证码
    countDown() {
        this.random()
        let { yztime } = this.state;
        let timer = setInterval(() => {
            this.setState({ yztime: (yztime--), loading: false }, () => {
                if (yztime <= -1) {
                    clearInterval(timer);　　//倒计时( setInterval() 函数会每秒执行一次函数)，用 clearInterval() 来停止执行:
                    this.setState({ loading: true, yztime: 89 })
                }
            });
            console.log(this.state.random)
        }, 1000);
    }
    //随机验证码
    random(){
        let random = Math.floor(Math.random()*10000)
        this.setState({
            random
        })
    }
    //获取验证码
    getYzm(e){
        let vCode = e.target.value
        this.setState({
            vCode
        })
    }
    //获取密码
    getPasw(e){
        let getPasw = e.target.value
        this.setState({
            getPasw
        })
    }
    //再次输入
    checkPasw(e){
        let checkPasw = e.target.value
        this.setState({
            checkPasw
        })
    }
    //点击注册跳转
    goLogin(){
        if(this.state.getPasw === this.state.checkPasw && parseInt(this.state.random) === parseInt(this.state.vCode)){
            this.props.history.push('/mine');
            this.props.dispatch({
                type: 'example/save',
                payload:{
                    isok:true //验证通过，把isok添加到公共仓库，用于控制mine的遮罩
                }
            })
        }
    }
    render() {
        // console.log(this)
        return (
            <div>
                <section className="login_bt">
                    <div className="divoi">
                        <p>我们已发送短信验证码至{this.state.tel}，请在输入框内填写验证码，若未收到请耐心等候~</p>
                    </div>
                    <form action="registerDetail.html" id="registerForm" method="post">
                        <div className="divoi_odi">
                            <div className="login_td" id="login_dt">
                                <input type="number" placeholder="请输入验证码" id="captcha" name="captcha" maxLength="8" onChange={this.getYzm.bind(this)}/>
                            </div>
                            <div className="login_od" id="login_do" style={
                                {
                                    width: '116px',
                                    boxShadow: 'rgb(233, 113, 126) 0px 5px 0px 0px'
                                }
                            } style={
                                {
                                    background: this.state.loading ? 'rgb(255, 124, 138)' : 'rgb(203, 203, 203)'
                                }
                            }>
                                <a href="javascript:void(0);" id="captchabeijing" style={
                                    { display: 'block' }
                                } onClick={this.countDown.bind(this)} style={
                                    {
                                        cursor: this.state.loading ? '' : 'default', pointerEvents: this.state.loading ? '' : 'none'
                                    }
                                }>
                                    <input type="button" id="getCaptcha" style={{ 
                                        textalign: 'left', 
                                        borderWidth: '0px', 
                                        borderStyle: 'initial', 
                                        borderColor: 'initial', 
                                        background: 'url(&quot;0&quot;) no-repeat', 
                                        color: this.state.loading?'rgb(255, 255, 255)':'black' 
                                    }} value={this.state.loading?"重新发送":this.state.yztime+'后重新发送'} />
                                </a>
                            </div>
                        </div>
                        <div className="divoi_odi" style={{ display: 'none' }}>
                            <div className="login_td" id="login_dt">
                                <input type="text" placeholder="请输人图片中的文字" id="captcha2" />
                            </div>
                            <div className="login_od" id="login_do">
                                <img alt="看不清楚，换一张" />
                            </div>
                        </div>
                        <aside className="aisde">
                            <div>
                                <div className="aisde_od">
                                    <input type="password" placeholder="请设置密码" name="password" id="password" onChange={this.getPasw.bind(this)}/>
                                </div>
                            </div>
                            <div>
                                <div className="aisde_od">
                                    <input type="password" placeholder="请重复密码" name="passwordCheck" id="passwordCheck" onChange={this.checkPasw.bind(this)}/>
                                </div>
                            </div>
                        </aside>
                        <div className="asied">
                            <div className="aisde_odi">
                                <input type="text" placeholder="请输入邀请码(默认为666666)" id="inviteCode" name="inviteCode" />
                            </div>
                        </div>
                        <aside className="aised_w" id="dio" style={{ padding: '15px 0 0 20px' }}>
                            <div className="aised_w_od" id="p_1">
                                <p>怎么获得邀请码？</p>
                            </div>
                            <div className="aised_w_td">
                                <img src="https://m.wukonglicai.com/img/icon-down1.png" alt="" id="img_1" />
                            </div>
                        </aside>
                        <div className="div"></div>
                        <aside className="aised_dis" style={{ display: 'block', top: '-3px', position: 'relative' }}>
                            <ul style={{ padding: '0 0 0 10px' }}>
                                <li>·填写<p>好友邀请码</p>，和好友一起拿特权</li>
                                <li>·无好友邀请码，填<p>666666</p>也能拿特权</li>
                            </ul>
                        </aside>
                        <div className="odi"></div>
                        <aside>
                            <input type="button" value="注册" id="regButton" className="login_btn" onClick={this.goLogin.bind(this)}/>
                        </aside>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '12px', color: '#777777' }}>期望回报并非平台承诺回报</p>
                    <p style={{ textAlign: 'center', fontSize: '12px', color: '#777777' }}>网贷有风险，出借需谨慎</p>
                </section>
            </div>
        )
    }
}))