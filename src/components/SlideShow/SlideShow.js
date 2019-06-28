import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'

export default class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newlist: [0, 1]
        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return (
            <div className="swiper-container swiper-container-horizontal">
                <ul className="swiper-wrapper" style={{
                    transform: 'translate3d(-1125px, 0px, 0px)',
                    transitionDuration: '0ms'
                }}>
                    <li className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" style={{ width: '375px' }}><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.wukonglicai.app"><img src="https://m.wukonglicai.com/img/banner/loadAPP_banner.png" alt="" /></a>
                    </li>
                    <li className="swiper-slide" data-swiper-slide-index="0" style={{ width: '375px' }}><a href=""><img src="https://static.9f.cn/isp/img/20190313144613.jpg" alt="" /></a></li>
                    <li className="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style={{ width: '375px' }}><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.wukonglicai.app"><img src="https://m.wukonglicai.com/img/banner/loadAPP_banner.png" alt="" /></a>
                    </li>
                    <li className="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style={{ width: '375px' }}><a href=""><img src="https://static.9f.cn/isp/img/20190313144613.jpg" alt="" /></a></li>
                </ul>
                <div className="swiper-pagination n-prc-pag swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span></div>
            </div>
        )
    }
}