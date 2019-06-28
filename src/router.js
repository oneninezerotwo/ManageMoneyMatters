import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import 'weui';

import Home from './routes/Home/Home';
import Invest from './routes/Invest/Invest';
import SkyPow from './routes/SkyPow/SkyPow';
import Mine from './routes/Mine/Mine';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/invest" component={Invest} />
        <Route path="/skypow" component={SkyPow} />
        <Route path="/mine" component={Mine} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
