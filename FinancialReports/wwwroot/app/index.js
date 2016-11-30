import React, { PropTypes } from 'react';
import {Router, browserHistory, Route} from 'react-router';
import routes from './routes';
import { render } from 'react-dom';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);