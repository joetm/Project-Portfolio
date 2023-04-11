import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './pages/App.jsx'


import './css/foundation.css';
import './css/loading.css';
import './css/animation.css';
import './css/style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
