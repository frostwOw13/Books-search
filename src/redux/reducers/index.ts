import { combineReducers } from 'redux';
import {
  booksReducer,
  setSearchValue,
  setCategory,
  setStartIndex,
  setOrderBy,
} from './booksReducer';

const reducers = combineReducers({
  allBooks: booksReducer,
  searchValue: setSearchValue,
  category: setCategory,
  startIndex: setStartIndex,
  orderBy: setOrderBy,
});

export default reducers;
