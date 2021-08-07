import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootState from './redux/store';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={RootState}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
