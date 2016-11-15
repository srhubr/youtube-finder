import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/store';
import YoutubeFinder from 'youtube-finder';
import { getVideos } from 'redux/actions/yearPageActions';
import { getVideos2 } from 'redux/actions/livePageActions';

const initialState = window.REDUX_INITIAL_STATE || {};

window.YoutubeClient = YoutubeFinder.createClient({ key: 'AIzaSyDd3QGZaj-bTDmV7pfJHhn5uSLCaX1UPC8' });

const store = configureStore(initialState);

store.dispatch(getVideos('2015'));
store.dispatch(getVideos2('live'));

const component = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes()}
    </Router>
  </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
