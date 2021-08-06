import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title">Search for books</h1>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="header__options">
        <select className="category">
          <option>all</option>
        </select>
        <select className="sortby">
          <option>relevance</option>
          <option>newest</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
