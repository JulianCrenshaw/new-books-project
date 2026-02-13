import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const book = ({ book }) => {
  return (
    <div className="books">
      <div className="book">
        <a href="">
          <figure className="book__img--wrapper">
            <img
              src="book.url"
              alt=""
              className="book__img"
            />
          </figure>
        </a>
        <div className="book__atitle">
          <a href="/" className="book__title--link">
            {book.title}
          </a>
        </div>
        <div className="book__ratings">
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star-half-alt" />
        </div>
        <div className="book__price">
          '<span className="book__price--normal">${book.originalPrice}</span>
          ${book.salePrice}
        </div>
      </div>
    </div>
  );
};

export default book;
