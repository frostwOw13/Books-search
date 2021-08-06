import { combineReducers } from 'redux';
import { booksReducer, selectedBooksReducer } from './booksReducer';

const reducers = combineReducers({
  allBooks: booksReducer,
  book: selectedBooksReducer,
});

export default reducers;
