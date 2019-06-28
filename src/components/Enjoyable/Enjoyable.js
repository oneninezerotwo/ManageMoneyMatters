import React, { Component } from 'react';
import axios from 'axios'

export default class Inow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menber: []
        }
    }
    componentDidMount() {
        this.getEnjoy()
    }
    async getEnjoy() {
        const getdata = await axios.get('https://www.easy-mock.com/mock/5cf638f131d44a153b4b0a69/example/level-status')
        const menber = getdata.data.data.ordinaryInterest
        // console.log(menber)
        this.setState({
            menber
        })
    }
    render() {
        // console.log(this)
        return (
            <section data-v-7bb4aba0="" data-v-3904e916="" className="r-interest-box">
                <h2 data-v-2cd6b2a6="" data-v-7bb4aba0="" className="title">
                    <div data-v-2cd6b2a6="" style={{ fontSize: '18px' }}>悟空会员尊享权益
                        <span data-v-2cd6b2a6="" className="n-desc"></span>
                    </div>
                    <button data-v-2cd6b2a6="" className="title-btn">查看更多</button>
                </h2>
                <div data-v-7bb4aba0="" className="tag-content">
                    {
                        this.state.menber.map((item, index) => {
                            return (
                                <dl key={index} data-v-fcf0d6ae="" data-v-7bb4aba0="" className="icon-tag cow_4 icon-disablde">
                                    <dt data-v-fcf0d6ae="">
                                        <img data-v-fcf0d6ae="" src={item.icon} alt="" srcSet="" />
                                    </dt>
                                    <dd data-v-fcf0d6ae="">
                                        <span data-v-fcf0d6ae="">{item.title}</span>
                                        <em data-v-fcf0d6ae="">{item.privilegeDesc}</em>
                                    </dd>
                                </dl>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}