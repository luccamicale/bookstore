

const addBook = () => ({
  type: 'ADD-BOOK',
  payload: add,
});

const removeBook = () => ({
    type: 'REMOVE-BOOK',
    payload: quit,
});

export default { addBook, removeBook };