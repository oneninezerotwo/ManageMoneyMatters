import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {connect} from 'dva'

export default connect((state)=>{
    return state
}) (class Mine extends Component {
    constructor(props){
        super(props)
        this.state={
            showTel:false
        }
    }
    //如果localstorage的值，作为用户名
    userTel(){
        if(localStorage.getItem('tel')){
            this.setState({
                showTel:true
            })
        }
    }
    //清除localstorage并刷新页面
    cleanTel(){
        localStorage.removeItem('tel')
        window.location.reload( true )
    }
    componentDidMount() {
        this.userTel()
        new Swiper('.swiper-container', {
            // loop: true, // 循环模式选项
            slidesPerView:4.5 //显示多少张图片
            //自动轮播
            // autoplay: {
            //     delay: 2000,
            //     disableOnInteraction: false   //触摸后不会停止自动滚动
            //     delay:1,   //每滚动一个图片后等待的时间，这里设置为1ms就是代表没有等待
            // },
            // effect : 'slide',//slide的切换效果，默认为"slide"（位移切换），可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
            //分页器
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            // speed:3000,  //设置图片滚动速度

            // 如果需要前进后退按钮
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            //   },
            // spaceBetween: 30,   //两图片之间的空隙
            // breakpoints: {   //设置浏览器不同尺寸时的显示方式
            //     320: {
            //       slidesPerView: 2,
            //       spaceBetween: 10
            //     },
            //     //当宽度小于等于640
            //     640: {
            //       slidesPerView: 3,
            //       spaceBetween: 20
            //     }
        })
    }
    render() {
        // console.log(this)
        return (
            <div id="container">
                <div className="m-mact-infobox">
                    <div className="m-header">
                        <span className="n-zs-yc"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/mact-yc.png" alt="" /></span>
                        <div className="m-main">
                            <dl>
                                <dt><span className="n-more"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-more.png" alt="" /></span><span className="n-wk" id="tosetting"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/user-tx.png" alt="" /></span></dt>
                                <dd>
                                    <p className="n-username" id="mobile">{localStorage.getItem('tel')?localStorage.getItem('tel').replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'):'账户名称'}</p>
                                    <p className="n-vip-level"><span>会员等级</span></p>
                                </dd>
                            </dl>
                        </div>
                        <span className="n-msg" id="tomsg"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-msg.png" alt="" onClick={this.cleanTel.bind(this)}/><em id="msgcount" style={{display:'none'}}></em></span>
                    </div>
                    <div className="m-mact-total">
                        <div className="n-total">
                            <p className="n-t">昨日期望回报<img name="showExplainImg" style={{width: '0.3rem', marginLeft: '0.1rem'}} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>
                            <p className="n-m"><big id="yestodayBenefit">--</big></p>
                        </div>
                        <div className="n-income">
                            <dl id="yestodayBenefitDl">
                                <dt>总资产(元)</dt>
                                <dd id="currentTotalMoney">--</dd>
                            </dl>
                            <dl>
                                <dt>累计期望回报<img name="showExplainImg" style={{width:' 0.3rem', marginLeft: '0.1rem'}} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></dt>
                                <dd id="accumulatedIncome">--</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="m-myinvest">
                    <h2>我的出借</h2>
                    <div className="swiper-container my-category swiper-container-horizontal swiper-container-free-mode">
                        <ul className="swiper-wrapper banner-box">
                            <li className="swiper-slide swiper-slide-active">
                                <a href="/weixin/user/accountDetail.html?type=M">
                                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-month.png " alt="" /></span>
                                    <p>月账户</p>
                                </a>
                            </li>
                            <li className="swiper-slide swiper-slide-next">
                                <a href="/weixin/user/accountDetail.html?type=Q">
                                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-season.png" alt="" /></span>
                                    <p>季账户</p>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="/weixin/user/accountDetail.html?type=Y">
                                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-year.png" alt="" /></span>
                                    <p>年账户</p>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="/weixin/user/accountDetail.html?type=T">
                                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-tg.png" alt="" /></span>
                                    <p>特供</p>
                                </a>
                            </li>
                            <li className="swiper-slide">
                                <a href="/weixin/user/accountDetail.html?type=X">
                                    <span><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-xnbj.png" alt="" /></span>
                                    <p>虚拟本金</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="m-mact-main">
                    <li>
                        <a href="/weixin/user/myprivate.html">
                            <span className="n-left"><em className="n-icon"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-tq.png" alt="" /></em>我的特权</span>
                            <span className="n-right">
                                <em className="n-jt-r"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/ico-right-sj.svg" alt="" /></em></span>
                        </a>
                    </li>
                    <li>
                        <a href="/weixin/user/jf/integral.html">
                            <span className="n-left"><em className="n-icon"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-kfjlb.png" alt="" /></em>空粉俱乐部</span>
                            <span className="n-right">
                                <em className="n-jt-r"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/ico-right-sj.svg" alt="" /></em></span>
                        </a>
                    </li>
                    <li>
                        <a href="/weixin/user/coupons.html">
                            <span className="n-left"><em className="n-icon"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-baibx.png" alt="" /></em>百宝箱</span>
                            <span className="n-right">
                                <em className="n-jt-r"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/ico-right-sj.svg" alt="" /></em></span>
                        </a>
                    </li>
                    <li>
                        <a href="/weixin/user/goAuth.html">
                            <span className="n-left"><em className="n-icon"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-set.png" alt="" /></em>账户设置</span>
                            <span className="n-right">
                                <em className="n-jt-r"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/ico-right-sj.svg" alt="" /></em></span>
                        </a>
                    </li>
                    <li>
                        <a href="/weixin/user/more.html">
                            <span className="n-left"><em className="n-icon"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/icon-moreb.png" alt="" /></em>更多</span>
                            <span className="n-right">
                                <em className="n-jt-r"><img src="https://m.wukonglicai.com/extra/userRedAccount/img/ico-right-sj.svg" alt="" /></em></span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
})