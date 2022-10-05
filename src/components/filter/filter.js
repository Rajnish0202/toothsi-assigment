import React from 'react';
import './filter.css';
import { ImUndo } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Filter = ({ products, filterByName, setFilterByName, filterBySize, setFilterBySize, search, setSearch }) => {
  const resetHandler = () => {
    setFilterByName('');
    setFilterBySize('');
    setSearch('');
  };

  return (
    <div className='fillter_field'>
      <div className='filter_dropdown'>
        <select
          name=''
          className='fillter_control'
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        >
          <option value=' '>Categories</option>
          {[...new Set(products.map((item) => item.category))].map((item, i) => {
            return (
              <option value={item} key={i}>
                {item}
              </option>
            );
          })}
        </select>
        <select
          name=''
          className='fillter_control small'
          value={filterBySize}
          onChange={(e) => setFilterBySize(e.target.value)}
        >
          {[...new Set(products.flatMap((item) => item.size))].map((item, i) => {
            return (
              <option value={item} key={i}>
                {!item ? 'Size' : item}
              </option>
            );
          })}
        </select>
        <button className='btn_reset' onClick={() => resetHandler()}>
          <span>
            <ImUndo strokeWidth={'1'} />
          </span>
          Reset
        </button>
      </div>
      <div className='filter_search'>
        <div className='filter_search-field'>
          <label htmlFor=''>Search:</label>
          <input
            type='text'
            className='fillter_control big'
            placeholder='Search...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to='/cart' className='btn_addToCart'>
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Filter;
