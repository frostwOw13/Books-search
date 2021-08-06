import React from 'react';
import { useSelector } from 'react-redux';
import './BookComponent.scss';

const BookComponent = () => {
  const books = useSelector((state: any) => {
    return state.allBooks.books.items;
  });

  const spliceTitleText = (title: string) => {
    if (title?.length > 70) return `${title.split('').splice(0, 70).join('')}...`;
    return title;
  };

  const checkLenghtOfCategories = (categories: Array<string>) => {
    if (categories?.length > 1) return categories[0]
    return categories
  }

  const renderList = books?.map((book: any) => {
    const bookInfo = book.volumeInfo;
    console.log(bookInfo.title.length);
    return (
      <div className="book-container" key={books.id}>
        <img className="book__image" src={bookInfo.imageLinks?.thumbnail} alt="" />
        <p className="book__category">{checkLenghtOfCategories(bookInfo.categories)}</p>
        <p className="book__title">{spliceTitleText(bookInfo.title)}</p>
        <p className="book__author">{bookInfo.authors?.join(', ')}</p>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default BookComponent;
