import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from '../src/components/App/App';
import store from '../src/store'
import { Provider } from "react-redux";
import './asset/global.scss'
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
