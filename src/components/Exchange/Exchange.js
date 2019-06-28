import React, { Component } from 'react';
import axios from 'axios';

export default class Exchange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            change: []
        }
    }
    componentDidMount() {
        this.getChange()
    }
    async getChange() {
        const getdata = await axios.get('https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/redemption-center')
        const data = getdata.data.data.productList
        // console.log(data)
        this.setState({
            change: data
        })
    }
    render() {
        // console.log(this)
        return (
            <section data-v-6bbb52c8="" data-v-3904e916="" className="points-mall">
                <h2 data-v-2cd6b2a6="" data-v-6bbb52c8="" className="title"><div data-v-2cd6b2a6="" style={{ fontSize: '18px' }}>兑换专区
     <span data-v-2cd6b2a6="" className="n-desc"></span></div> <button data-v-2cd6b2a6="" className="title-btn">查看更多</button>
                </h2>
                <div data-v-6bbb52c8="" className="points-box">
                    {
                        this.state.change.map((item, index) => {
                            return (
                                <dl key={index} data-v-6bbb52c8="" className="points-list">
                                    <dt data-v-6bbb52c8="">
                                        <img data-v-6bbb52c8="" src={item.icon} alt="" />
                                    </dt>
                                    <dd data-v-6bbb52c8="">
                                        <span data-v-6bbb52c8="" className="n-tit">{item.name}</span>
                                        <span data-v-6bbb52c8="" className="n-desc">{item.originalPrice}空粉币</span>
                                    </dd>
                                </dl>
                            )
                        })
                    }

                    {/* <dl data-v-6bbb52c8="" className="points-list"><dt data-v-6bbb52c8=""><img data-v-6bbb52c8="" src="https://static.9f.cn/jfCentor/img/4312b5c9-0c35-4f96-9f8d-c7f5017e101e8487885854755009.jpg" alt="" /></dt> <dd data-v-6bbb52c8=""><span data-v-6bbb52c8="" className="n-tit">玖造 不沾油污超能布（*2袋）</span> <span data-v-6bbb52c8="" className="n-desc">26400空粉币</span> </dd></dl><dl data-v-6bbb52c8="" className="points-list"><dt data-v-6bbb52c8=""><img data-v-6bbb52c8="" src="https://static.9f.cn/jfCentor/img/489fbd6f-27c7-4146-bc9f-c6c7338a339e8413723219063009828.jpg" alt="" /></dt> <dd data-v-6bbb52c8=""><span data-v-6bbb52c8="" className="n-tit">澳佳宝 VE面霜（冰冰霜）50g</span> <span data-v-6bbb52c8="" className="n-desc">32800空粉币</span> </dd></dl> */}
                </div>
            </section>
        )
    }
}