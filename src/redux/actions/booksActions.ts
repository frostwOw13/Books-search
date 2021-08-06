import ActionTypes from '../constants/action-types';

export const setBooks = (books: any) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload: books,
  };
};

export const selectedBooks = (books: any) => {
  return {
    type: ActionTypes.SELECTED_BOOK,
    payload: books,
  };
};

export const removeSelectedBooks = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BOOK,
  };
};

export const countCurrentPage = (page: number) => {
  return {
    type: ActionTypes.COUNT_CURRENT_PAGE,
    payload: page,
  };
};
