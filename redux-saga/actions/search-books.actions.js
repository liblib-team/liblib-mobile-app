import { SEARCH_BOOKS, SEARCH_BOOKS_SUCCESS } from './action-type'
  
  export const querySearchBooks = (key) => ({
    type: SEARCH_BOOKS,
    response: {
      success: SEARCH_BOOKS_SUCCESS,
    },
    key,
  })
  