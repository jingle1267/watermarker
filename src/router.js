import React from 'react';
import {HashRouter, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import {createBrowserHistory} from 'history'


function RouterConfig({history}) {

  return (
    <HashRouter history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
      </Switch>
    </HashRouter>
  );
}

export default RouterConfig;
