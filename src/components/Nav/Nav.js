import React, { Component } from 'react'
import '../../assets/c.css'
import Swiper from 'swiper/dist/js/swiper.js'
// import 'swiper/dist/css/swiper.min.css'
export default class Nav extends Component {
	componentDidMount() {
		new Swiper('.swiper-container2', {
			loop: true, // 循环模式选项
			centeredSlides: true,     //居中展示                        
			spaceBetween: 15,         //间距20px
			slidesPerView: 'auto',    //显示多少个
			pagination: {
				el: '.highLight',
			},

		})
	}
	render() {
		return (
			<div id="container">
				<ul className="m-nav">
					<li><em><img src="https://m.wukonglicai.com/img/ico_nav1.png" alt="" /></em><span>新手专区</span>
					</li>
					<li><em><img src="https://m.wukonglicai.com/img/aqbz.png" alt="" /></em><span>安全保障</span>
					</li>
					<a style={{ display: 'inline-block', 'WebkitFlex': '3 0 33.33333%', textAlign: 'center', color: '#666', position: 'relative' }} href="https://www.9fpuhui.com/xxpl-h5/views/xxplList.htm"><em style={{ display: 'inline-block', verticalAlign: 'middle', width: '0.64rem', height: '0.64rem', marginTop: '0.02rem' }}>
						<img src="https://m.wukonglicai.com/img/informationDdisclosure.png" alt="" /></em><span style={{ display: 'inline-block', width: '100%', marginTop: '0.06rem', fontSize: ' 0.23rem' }}>信息披露</span></a>
				</ul>
				<div className="swiper-container2 m-pro swiper-container-horizontal">
					<ul className="swiper-wrapper" id="productInfo" style={{ transform: 'translate3d(-2278.5px, 0px, 0px)', transitionDuration: '0ms' }}><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="0" style={{ marginRight: '14px' }}>
						<div className="n-pro-main">
							<div className="n-top">
								<span>季账户-3个月</span><em className="icon-wd">网贷</em>
								<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Q3-190117150904512">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
							</div>
							<div className="n-main">
								<div className="n-box">
									<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>
									<h2 className="n-int-rate">6.0<em>%</em></h2>
									<p className="n-magb">
									</p>
									<div className="n-qual">
										<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
										<span>最低100元起</span>
										<span>出借无上限</span>
									</div>
								</div>
								<div className="n-btn">
									<a href="https://m.wukonglicai.com/weixin/register.html">
										<big>马上加入</big>
									</a>
								</div>
							</div>
						</div>
					</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="1" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>月账户</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=M190117151824811">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>

										<h2 className="n-int-rate">4.5<em>%</em>-8.5<em>%</em></h2>
										<div className="n-moth"><em>4.5%</em>起，逐月<em>+0.5%</em>，最高<em>8.5%</em><br />每月可申请债权转让1次<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></div>

									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="2" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享21天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T21-FB190117151528287">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>
										<h2 className="n-int-rate">12.0<em>%</em></h2>
										<p className="n-magb">
										</p>
										<div className="n-qual">
											<span>封闭期21天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>
											<span>上限3万</span>
										</div>
									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="3" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享90天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T90-FB190117151749370">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>
										<h2 className="n-int-rate">8.0<em>%</em></h2>
										<p className="n-magb">
										</p>
										<div className="n-qual">
											<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>
											<span>上限2万</span>
										</div>
									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="4" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享365天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T365-FB190117151640326">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">10.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限1万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="5" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>年账户-1年</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Y12-190221144847577">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">8.5<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>出借无上限</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list swiper-slide-prev" data-swiper-slide-index="0" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>季账户-3个月</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Q3-190117150904512">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">6.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>出借无上限</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list swiper-slide-active" data-swiper-slide-index="1" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>月账户</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=M190117151824811">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>

										<h2 className="n-int-rate">4.5<em>%</em>-8.5<em>%</em></h2>
										<div className="n-moth"><em>4.5%</em>起，逐月<em>+0.5%</em>，最高<em>8.5%</em><br />每月可申请债权转让1次<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list swiper-slide-next" data-swiper-slide-index="2" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享21天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T21-FB190117151528287">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">12.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期21天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限3万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list" data-swiper-slide-index="3" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享90天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T90-FB190117151749370">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">8.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限2万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list" data-swiper-slide-index="4" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享365天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T365-FB190117151640326">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">10.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限1万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>

						<li className="swiper-slide n-pro-list" data-swiper-slide-index="5" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>年账户-1年</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Y12-190221144847577">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">8.5<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>出借无上限</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>


						<li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="0" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>季账户-3个月</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Q3-190117150904512">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">6.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>出借无上限</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="1" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>月账户</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=M190117151824811">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>

										<h2 className="n-int-rate">4.5<em>%</em>-8.5<em>%</em></h2>
										<div className="n-moth"><em>4.5%</em>起，逐月<em>+0.5%</em>，最高<em>8.5%</em><br />每月可申请债权转让1次<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="2" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享21天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T21-FB190117151528287">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">12.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期21天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限3万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="3" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享90天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T90-FB190117151749370">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">8.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期90天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限2万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="4" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>新手专享365天</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=T365-FB190117151640326">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">10.0<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>上限1万</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li><li className="swiper-slide n-pro-list swiper-slide-duplicate" data-swiper-slide-index="5" style={{ marginRight: '14px' }}>
							<div className="n-pro-main">
								<div className="n-top">
									<span>年账户-1年</span><em className="icon-wd">网贷</em>
									<a href="https://m.wukonglicai.com/weixin/investDetail.html?pCode=Y12-190221144847577">详情<em><img src="https://m.wukonglicai.com/img/ico-right-sj.svg" alt="" /></em></a>
								</div>
								<div className="n-main">
									<div className="n-box">
										<p className="n-mag">期望年化回报率<img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p>


										<h2 className="n-int-rate">8.5<em>%</em></h2>

										<p className="n-magb">

										</p>



										<div className="n-qual">
											<span>封闭期365天<p style={{ display: 'inline-block' }}><img name="showExplainImg" style={{ width: '0.3rem', marginLeft: '0.1rem' }} src="https://m.wukonglicai.com/images/exclamation_mark2.png" /></p></span>
											<span>最低100元起</span>

											<span>出借无上限</span>

										</div>


									</div>
									<div className="n-btn">
										<a href="https://m.wukonglicai.com/weixin/register.html">
											<big>马上加入</big>
										</a>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div className="n-page swiper-pagination-clickable swiper-pagination-bullets highLight">
						{/* <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span> */}
					</div>
				</div>
				<div className="m-ad-box">
				</div>
			</div>
		)
	}
}