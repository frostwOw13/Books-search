export interface BooksReducerBody {
  type: string,
  payload: string
}

export interface HeaderProps {
  currentPage: number
}

export interface RequestReducer {
  type: string,
  payload: string
}

export interface Request {
  searchValue: string,
  category: string,
  startIndex: string,
  orderBy: string
}
