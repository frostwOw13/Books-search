import ActionTypes from '../constants/action-types';

export const setBooks = (books: any) => {
  return {
    type: ActionTypes.SET_BOOKS,
    payload: books,
  };
};

export const setSearchValue = (searchValue: string) => {
  return {
    type: ActionTypes.SET_SEARCH_VALUE,
    payload: searchValue,
  };
};

export const setCategory = (category: string) => {
  return {
    type: ActionTypes.SET_CATEGORY,
    payload: category,
  };
};

export const setStartIndex = (startIndex: string) => {
  return {
    type: ActionTypes.SET_START_INDEX,
    payload: startIndex,
  };
};

export const setOrderBy = (orderBy: string) => {
  return {
    type: ActionTypes.SET_ORDER_BY,
    payload: orderBy,
  };
};
