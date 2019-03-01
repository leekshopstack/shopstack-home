import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/scaffolding.css';
import './assets/styles/base.css';
import './assets/styles/main-style.css';
import './assets/styles/iconfonts.css'
import './assets/styles/color-skins.css'
import './assets/styles/main-menu.css'
import './assets/styles/blox.css'
import './assets/styles/visualcomposer.css'
import './assets/styles/js_composer.min.css'
import './assets/styles/inner.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
