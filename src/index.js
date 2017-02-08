import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './Root';
import configureStore from './configureStore';
import { getVideos } from './actions/yearPageActions';
import { getVideos2 } from './actions/livePageActions';
import './css/bootstrap.css';
import './css/main.css';

const store = configureStore();

store.dispatch(getVideos('2016'));
store.dispatch(getVideos2('live'));

ReactDOM.render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);
