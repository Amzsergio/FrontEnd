import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter as BRouter } from 'react-router-dom'

ReactDOM.render(
  <BRouter>

    <App />

  </BRouter>
  ,
  document.getElementById('root')
);
