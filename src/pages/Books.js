import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Boook';
import AddBook from '../components/addBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="main-container">
      {books && books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
