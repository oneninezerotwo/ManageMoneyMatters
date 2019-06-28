import React,{Component} from 'react';
import Sheader from '../../components/Sheader/Sheader'
import Enjoyable from '../../components/Enjoyable/Enjoyable'
import Exchange from '../../components/Exchange/Exchange'
import Community from '../../components/Community/Community'
import TabBar from '../../components/TabBar/TabBar'

export default class Home extends Component{
    state={
        tab:2
    }
    render(){
        return(
            <div id="SkyPow">
                <Sheader/>
                <Enjoyable/>
                <Exchange/>
                <Community/>
                <TabBar tab={this.state.tab}/>
            </div>
        )
    }
}