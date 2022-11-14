const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';

// action to add
const addBook = () => ({
  type: ADD_BOOK,
  payload: test,
});

// action to delete
const removeBook = () => ({
  type: REMOVE_BOOK,
  payload: test,
});

// create a reducer
const initialState = (state = '', action) => {
  if (action.type === ADD_BOOK) {
    return action.payload;
  }
  if (action.type === REMOVE_BOOK) {
    return action.payload;
  }
  return state;
};
// always is necessary to return the state

export default { addBook, removeBook, initialState };
