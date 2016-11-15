import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/store';

const app = express();

app.use((req, res) => {
  const store = configureStore();

  match({ routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (error) {
      return res.status(500).send(error.message);
    }

    if (!renderProps) {
      return res.status(404).send('Not found');
    }


    const componentHTML = ReactDom.renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const state = store.getState();

    return res.end(renderHTML(componentHTML, state));
  });
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML, initialState) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Youtube Finder</title>
        <link rel='stylesheet' href='${assetUrl}/public/styles.css'>
        <script type='text/javascript'
          src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDd3QGZaj-bTDmV7pfJHhn5uSLCaX1UPC8'>
        </script>
        <script type='application/javascript'>
          window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
        </script>
      </head>
      <body>
        <div id='root'>${componentHTML}</div>
        <script type='application/javascript' src='${assetUrl}/public/bundle.js'></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
