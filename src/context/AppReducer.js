const AppReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_BOOK_TO_TOREAD':
          return {
              ...state,
              toread: [action.payload, ...state.toread]
          }

      case "ADD_BOOK_TO_FINISHED":
          return {
              ...state,
              toread: state.toread.filter((book) => book.book_id !== action.payload.book_id
              ),
              finished: [action.payload, ...state.finished],
          }
      case 'REMOVE_BOOK_FROM_TOREAD':
          return {
              ...state,
              toread: state.toread.filter(book => book.book_id !== action.payload)
          }
      case "MOVE_BOOK_TO_FINISHED":
          return {
              ...state,
              finished: state.finished.filter(
                  (finished) => finished.book_id !== action.payload.book_id
              ),
              toread: [action.payload, ...state.watchlist],
          };
      case "REMOVE_BOOK_FROM_FINISHED":
          return {
              ...state,
              finished: state.finished.filter(book => book.book_id !== action.payload)
          }
      default:
          return state;
  }
}

export default AppReducer;