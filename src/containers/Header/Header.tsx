import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [orderBy, setOrderBy] = useState<string>('relevance');
  const [category, setCategory] = useState<string>('all');

  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}:${category === 'all' ? '' : category}&maxResults=30&orderBy=${orderBy}`,
    );
    const data = await response.json();
    console.log(data);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    setSearchValue('');
    getBooks();
  };

  return (
    <header className="header">
      <h1 className="title">Search for books</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form__search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <button className="icon" type="submit">
            <div className="icon__image" />
          </button>
        </div>

        <div className="form__options">
          <select
            className="category"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option>all</option>
            <option>fiction</option>
            <option>fantasy</option>
            <option>computer</option>
          </select>
          <select
            className="sortby"
            onChange={(event) => {
              setOrderBy(event.target.value);
            }}
          >
            <option>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </form>
    </header>
  );
};

export default Header;
