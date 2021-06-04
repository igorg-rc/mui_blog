import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore'
import { Provider } from 'react-redux'
import './index.css';


// Layout_1_blog settings
import { Layout_1_blog } from './layout_1_blog/Layout_1_blog'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout_1_blog />
    </Provider>
  </React.StrictMode>,
  document.getElementById('layout_1_blog')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
