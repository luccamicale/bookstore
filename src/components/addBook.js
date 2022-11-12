import React from 'react';
import '../modules-css/addbook.css';

const AddBook = () => (
  <form className="form">
    <h3 className="add-title">ADD NEW BOOK</h3>
    <div className="inputs">
      <input className="add-book" type="text" placeholder="Book Title" />
      <input className="add-author" type="text" placeholder="Category" />
      <input className="btn-add-book" type="button" value="ADD BOOK" />
    </div>
  </form>
);

export default AddBook;
