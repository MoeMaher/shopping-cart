import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// rendering the application to the Div with id root in public/index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
