import { BooksReducerBody, RequestReducer } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, { type, payload }: BooksReducerBody) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export const setSearchValue = (state = '', { type, payload }: RequestReducer) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_VALUE:
      return payload;
    default:
      return state;
  }
};

export const setCategory = (state = 'all', { type, payload }: RequestReducer) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY:
      return payload;
    default:
      return state;
  }
};

export const setStartIndex = (state = '0', { type, payload }: RequestReducer) => {
  switch (type) {
    case ActionTypes.SET_START_INDEX:
      return payload;
    default:
      return state;
  }
};

export const setOrderBy = (state = 'relevance', { type, payload }: RequestReducer) => {
  switch (type) {
    case ActionTypes.SET_ORDER_BY:
      return payload;
    default:
      return state;
  }
};
