import React,{Component} from 'react';

// import Search from '../../components/Serach/Search';
import SlideShow from '../../components/SlideShow/SlideShow'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import TabBar from '../../components/TabBar/TabBar'

export default class Home extends Component{
    state={
        tab:0,
    }
    render(){
        return(
            <div id="box">
                {/* <Search/> */}
                <SlideShow />
                <Nav />
                <Footer />
                <TabBar tab={this.state.tab} />
            </div>
        )
    }
}