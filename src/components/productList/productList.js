import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { BsFillEmojiSmileFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

import './productList.css';

const ProductList = ({ products, search, filterByName, filterBySize }) => {
  const dispatch = useDispatch();

  const filterItems = products
    .filter((obj) => obj.category.includes(filterByName))
    .filter((obj) => obj.name.toLowerCase().includes(search))
    .filter((obj) => obj.size.some((item) => item.includes(filterBySize)));

  const tableContent = filterItems.map((item) => {
    const { id, name, color, qunatity, price, imageUrl } = item;
    return (
      <tr className='product-list' key={id}>
        <td>
          <img src={imageUrl} alt={name.slice(0, 20)} className='product-image' />
        </td>
        <td className='product-name' title={name}>
          {name.slice(0, 20)}...
        </td>
        <td className='product-color'>{color.map((el) => el).join(' / ')}</td>
        <td className='product-stock'>
          {qunatity > 0 ? (
            <span>
              <BsFillEmojiSmileFill size={15} /> In Stock
            </span>
          ) : (
            <span>
              <BsFillEmojiFrownFill size={15} /> Stock Out
            </span>
          )}
        </td>
        <td className='product-price'>${price.toFixed(2)}</td>
        <td>
          <div className='cart_field'>
            <input type='number' defaultValue={1} className='cart_input' />
            <button className='cart_icon'>
              <BsCart3 strokeWidth={1} />
            </button>
            <input
              type='checkbox'
              className='cart_checkbox'
              data-id={id}
              onClick={(e) => {
                addToCart(e, item);
              }}
            />
          </div>
        </td>
      </tr>
    );
  });

  const addToCart = (e, product) => {
    const checkBox = e.target.checked;
    if (!checkBox) return;
    dispatch(addCart(product));
    return;
  };

  const emptyList = (
    <h3 className='emptyCart'>
      No product found... <MdOutlineRemoveShoppingCart size={50} />
    </h3>
  );

  return (
    <>
      {filterItems.length === 0 && emptyList}
      {filterItems.length > 0 && (
        <div className='products_list'>
          <table className='products-list'>
            <tbody>
              <tr className='product-list product-list-header'>
                <th>Image</th>
                <th>Name</th>
                <th>Color</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Buy</th>
              </tr>
              {tableContent}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ProductList;
