import { SEARCH_BOOKS, SEARCH_BOOKS_SUCCESS } from './action-type'
  
  export const querySearchBooks = () => ({
    type: SEARCH_BOOKS,
    response: {
      success: SEARCH_BOOKS_SUCCESS,
    },
  })
  