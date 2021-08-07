import {
  BooksReducerBody,
  BooksState,
  RequestReducer,
} from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialState = {
  books: [],
};

export const booksReducer = (
  state: BooksState = initialState,
  { type, payload }: BooksReducerBody,
) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export const setSearchValue = (
  state: string = '',
  { type, payload }: RequestReducer,
) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_VALUE:
      return payload;
    default:
      return state;
  }
};

export const setCategory = (
  state: string = 'all',
  { type, payload }: RequestReducer,
) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export const setStartIndex = (
  state: string = '0',
  { type, payload }: RequestReducer,
) => {
  switch (type) {
    case ActionTypes.SET_START_INDEX:
      return payload;
    default:
      return state;
  }
};

export const setOrderBy = (
  state: string = 'relevance',
  { type, payload }: RequestReducer,
) => {
  switch (type) {
    case ActionTypes.SET_ORDER_BY:
      return payload;
    default:
      return state;
  }
};
