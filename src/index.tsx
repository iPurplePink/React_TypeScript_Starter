import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.scss';
import App from './appRoot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
