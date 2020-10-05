import React from 'react';
import ReactDOM from 'react-dom';
import Topos from './components/header'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Topos>
    BOA NOITE BRASIL!
  </Topos>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
