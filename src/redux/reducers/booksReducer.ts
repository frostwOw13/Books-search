import { BooksBody } from '../../shared/interfaces';
import ActionTypes from '../constants/action-types';

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, { type, payload }: BooksBody) => {
  switch (type) {
    case ActionTypes.SET_BOOKS:
      return { ...state, books: payload };
    default:
      return state;
  }
};

export const selectedBooksReducer = (state = {}, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SELECTED_BOOK:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_BOOK:
      return {};
    default:
      return state;
  }
};

export const countCurrentPage = (state = 0, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.COUNT_CURRENT_PAGE:
      return payload;
    default:
      return state;
  }
};
