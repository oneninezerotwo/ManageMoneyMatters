import React,{Component} from 'react';

import IHeader from '../../components/IHeader/IHeader'
import Inow from '../../components/Inow/Inow'
import Ifooter from '../../components/Ifooter/Ifooter'
import TabBar from '../../components/TabBar/TabBar'

export default class Home extends Component{
    state = {
        tab:1
    }
    render(){
        return(
            <div>
                <IHeader/>
                <Inow/>
                <Ifooter/>
                <TabBar tab={this.state.tab} />
            </div>
        )
    }
}