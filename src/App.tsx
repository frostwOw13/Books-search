import './App.scss';
import { Provider } from 'react-redux';
import React from 'react';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </Provider>
  );
}

export default App;
