import ActionTypes from '../constants/action-types';

export const setBooks = (books: any) => ({
  type: ActionTypes.SET_BOOKS,
  payload: books,
});

export const selectedBooks = (books: any) => ({
  type: ActionTypes.SELECTED_BOOK,
  payload: books,
});

export const removeSelectedBooks = () => ({
  type: ActionTypes.REMOVE_SELECTED_BOOK,
});
