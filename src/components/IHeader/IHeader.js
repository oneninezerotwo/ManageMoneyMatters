import React, { Component } from 'react';

export default class IHeader extends Component {
    state = {
        tabCont: [0, 1, 2],
        ind: 0,
        ind2: 0,
        ind3:0,
        tabs: [
            {
                id: 'M',
                title: '月账户',
                tab: 0
            },
            {
                id: 'Q',
                title: '季账户',
                tab: 1
            },
            {
                id: 'Y',
                title: '年账户',
                tab: 2
            },
            {
                id: 'S',
                title: '散标',
                tab: 3
            }
        ],
        year: [
            {   
                id:'Y12',
                cname:'span1',
                nian: '1年',
                hb: 8.5,
                fbq: 365
            },
            {
                id:'Y24',
                cname:'span2',
                nian: '2年',
                hb: 9.5,
                fbq: 730
            },
            {
                id:'Y36',
                cname:'span3',
                nian: '3年',
                hb: 10.5,
                fbq: 1095
            },
            {
                id:'Y48',
                cname:'span4',
                nian: '4年',
                hb: 11.0,
                fbq: 1460
            }
        ],
        moon: [
            {
                id:'Q3',
                cname:'span1',
                yue: '3个月',
                hb: 6.0,
                fbq: 90

            },
            {
                id:'Q6',
                cname:'span2',
                yue: '6个月',
                hb: 7.0,
                fbq: 180
            },
            {
                id:'Q9',
                cname:'span3',
                yue: '9个月',
                hb: 7.5,
                fbq: 270
            }
        ]
    }
    tabNum(ind) {
        this.setState({
            ind,
        })
    }
    tabInd(ind2) {
        this.setState({
            ind2,
        })
    }
    tabInd2(ind3) {
        this.setState({
            ind3,
        })
    }
    render() {
        // console.log(this) 
        return (
            <div className="change_content">
                <ul className="tabs" id="type">
                    {
                        this.state.tabs.map((item, index) => {
                            return (
                                <li key={index} id={item.id} style={{ background: this.state.ind === index ? '#1cc7b9' : null, color: this.state.ind === index ? 'white' : null }} onClick={this.tabNum.bind(this, index)}>{item.title}</li>
                            )
                        })
                    }
                    {/* <li id="S">散标</li> */}
                </ul>
                <div className="tabs_content">
                    <div className="part2 part" id="Mdiv" style={{ display: this.state.tabCont[0] === this.state.ind ? 'flex' : 'none' }} tabid={this.state.tabCont[0]}>
                        <div className="title">
                            <h1>月账户</h1>
                            <span>网贷</span>
                        </div>
                        <div className="pics">
                            <p className="line1">期望年化回报率<em><img style={{ width: '.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                            <p className="line2"><label>4.5</label><span>%</span>-<label>8.5</label><span>%</span></p>
                            <p className="check">查看详情<span></span></p>
                            <input type="hidden" value="M190117151824811" />
                        </div>
                        <div className="couple">
                            <p className="blank">
                            </p></div>
                        <p className="word">期望年化回报率<b>4.5%</b>起，逐月涨<b>0.5%</b>，最高<b>8.5%</b></p>
                        <p className="word">每月可申请债权转让<b>1</b>次<em><img style={{ width: ' .3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                    </div>
                    <div className="part3 part" style={{ display: this.state.tabCont[1] === this.state.ind ? 'flex' : 'none' }} id="Qdiv" tabid={this.state.tabCont[1]}>
                        <div className="title">
                            <h1>季账户-
                                {
                                    this.state.ind3 === 0 ? this.state.moon[0].yue : this.state.ind3 === 1 ? this.state.moon[1].yue : this.state.ind3 === 2 ? this.state.moon[2].yue : 0
                                }
                            </h1>
                            <span>网贷</span>
                        </div>
                        <div className="pics">
                            <p className="line1">期望年化回报率<em><img  style={{ width: ' .3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                            <p className="line2">{
                                this.state.ind3 === 0 ? this.state.moon[0].hb : this.state.ind3 === 1 ? this.state.moon[1].hb : this.state.ind3 === 2 ? this.state.moon[2].hb : 0
                            }
                                <span>%</span>
                            </p>
                            <p className="check">查看详情<span></span></p>
                            <input type="hidden" value="Q6-190221144733762" />
                        </div>
                        <div className="couple">
                            <p className="blank">
                            </p></div>
                        <p className="word">封闭期<b>
                            {
                                this.state.ind3 === 0 ? this.state.moon[0].fbq : this.state.ind3 === 1 ? this.state.moon[1].fbq : this.state.ind3 === 2 ? this.state.moon[2].fbq : this.state.ind3 === 0
                            }
                        </b>天，结束后申请债权转让或续投<em><img style={{ width: ' .3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                        <ul className="time_tabs" id="quarter">
                            {
                                this.state.moon.map((item, index) => {
                                    return (
                                        <li key={index} id={item.id} className={this.state.ind3 === index ? "current" : ""} onClick={this.tabInd2.bind(this, index)}><span className={item.cname}></span>{item.yue}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="part4 part" style={{ display: this.state.tabCont[2] === this.state.ind ? 'flex' : 'none' }} id="Ydiv" tabid={this.state.tabCont[2]}>
                        <div className="title">
                            <h1>年账户-
                                {
                                    this.state.ind2 === 0 ? this.state.year[0].nian : this.state.ind2 === 1 ? this.state.year[1].nian : this.state.ind2 === 2 ? this.state.year[2].nian : this.state.ind2 === 3 ? this.state.year[3].nian : 0
                                }
                            </h1>
                            <span>网贷</span>
                        </div>
                        <div className="pics">
                            <p className="line1">期望年化回报率<em><img  style={{ width: ' .3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                            <p className="line2">
                                {
                                    this.state.ind2 === 0 ? this.state.year[0].hb : this.state.ind2 === 1 ? this.state.year[1].hb : this.state.ind2 === 2 ? this.state.year[2].hb : this.state.ind2 === 3 ? this.state.year[3].hb : 0
                                }
                                <span>%</span>
                            </p>
                            <p className="check">查看详情<span></span></p>
                            <input type="hidden" value="Y12-190221144847577" />
                        </div>
                        <div className="couple"><p className="blank"></p></div>
                        <p className="word">封闭期
                        <b>
                            {
                                this.state.ind2 === 0 ? this.state.year[0].fbq : this.state.ind2 === 1 ? this.state.year[1].fbq : this.state.ind2 === 2 ? this.state.year[2].fbq : this.state.ind2 === 3 ? this.state.year[3].fbq : 0
                            }
                        </b>天，结束后申请债权转让或续投<em><img style={{ width: ' .3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></em></p>
                        <ul className="time_tabs" id="year">
                            {
                                this.state.year.map((item, index) => {
                                    return (
                                        <li key={index} className={this.state.ind2 === index ? "current" : ""} id={item.id} onClick={this.tabInd.bind(this, index)}><span className={item.cname}><b></b></span>{item.nian}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}