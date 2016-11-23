/*global document, console*/

// import appConfig from './config.json5';

import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './Components/App.jsx';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

