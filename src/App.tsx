import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import BookListing from './containers/BookListing/BookListing';
import BookDetail from './containers/BookDetail/BookDetail';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={BookListing} />
          <Route path="/book/:bookId" component={BookDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
