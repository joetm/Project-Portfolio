/* @flow */

/*********/
/*  CSS  */
/*********/

// TODO
import '../css/foundation.css'; // .min

import 'url-loader!../css/loading.css';
import '../css/animation.css';
import '../css/style.css';


/********/
/*  JS  */
/********/

import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap in Navbar > Appbar
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './Components/App.jsx';


render(
  <App />,
  document.getElementById('app')
);

