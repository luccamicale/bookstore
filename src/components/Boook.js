import React from 'react';
import PropTypes from 'prop-types';
import '../modules-css/boook.css';

const Book = ({ title, author }) => (
  <div className="book-container">
    <div>
      <ul className="main-ul">
        <li>
          <div>
            <div className="book-data">
              <div className="book-details">
                <div className="book-author">
                  <span className="action">Action</span>
                  <span className="title">{title}</span>
                  <span className="author">{author}</span>
                </div>
                <div className="book-buttons-container">
                  <button className="btn-buttons" type="button">Comments</button>
                  <span>|</span>
                  <button className="btn-buttons" type="button">Remove</button>
                  <span>|</span>
                  <button className="btn-buttons" type="button">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <div className="graphic-progress">
                  <div className="circular-progress" />
                  <div className="progress-number">
                    <span className="porcent">64%</span>
                    <span className="status">Completed</span>
                  </div>
                </div>
                <div className="current-chapter">
                  <span className="current">Current Chapter</span>
                  <span className="chapter">Chapter 17</span>
                  <button className="btn-update" type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
