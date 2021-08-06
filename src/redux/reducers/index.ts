import { combineReducers } from 'redux';
import { booksReducer, selectedBooksReducer, countCurrentPage } from './booksReducer';

const reducers = combineReducers({
  allBooks: booksReducer,
  book: selectedBooksReducer,
  currentPage: countCurrentPage,
});

export default reducers;
