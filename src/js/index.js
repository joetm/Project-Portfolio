/*global document, console*/

/*  CSS  */

// import '../css/foundation.css'; // .min
// import '../css/loading.css';
// import '../css/animation.css';
import '!css-loader!sass-loader!../css/foundation.scss';
// import '../css/style.scss';


/*  JS  */

// import appConfig from './config.json5';

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './Components/App.jsx';


render(
  <App />,
  document.getElementById('app')
);

