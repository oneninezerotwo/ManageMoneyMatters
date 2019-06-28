import React,{Component} from 'react';
import TabBar from '../../components/TabBar/TabBar'
import Mine from '../../components/Mine/Mine'
import Mfooter from '../../components/Mine/Mfooter'
import Shade from '../../components/Shade/Shade'

export default class Home extends Component{
    state={
        tab:3,
    }
    render(){
        return(
            <div id="Mine">
                <Shade/>
                <Mine/>
                <Mfooter/>
                <TabBar tab={this.state.tab}/>
            </div>
        )
    }
}