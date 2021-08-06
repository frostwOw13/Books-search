import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BookComponent.scss';

const BookComponent: React.FC = () => {
  const books = useSelector((state: any) => {
    return state.allBooks.books.items;
  });

  const spliceTitleText = (title: string) => {
    if (title?.length > 70) return `${title.split('').splice(0, 70).join('')}...`;
    return title;
  };

  const checkLenghtOfCategories = (categories: Array<string>) => {
    if (categories?.length > 1) return categories[0];
    return categories;
  };

  const renderList = books?.map((book: any, id: number) => {
    const bookInfo = book.volumeInfo;
    return (
      <Link to={`/book/${id}`} key={book.id} style={{ textDecoration: 'none' }}>
        <div className="book-container">
          <img className="book__image" src={bookInfo.imageLinks?.thumbnail} alt={bookInfo.title} />
          <p className="book__category">{checkLenghtOfCategories(bookInfo.categories)}</p>
          <p className="book__title">{spliceTitleText(bookInfo.title)}</p>
          <p className="book__author">{bookInfo.authors?.join(', ')}</p>
        </div>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default BookComponent;
