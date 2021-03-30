// import routerConfig from './router.config'
import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom'
import { Router, Route, hashHistory } from 'react-router'
import activityManagement from '../pages/jike/activity/activityManagement'
export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={activityManagement} />
  </Router>
)
